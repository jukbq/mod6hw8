 import { Component, OnInit } from '@angular/core';
import { deleteObject, getDownloadURL, percentage, ref, Storage, uploadBytesResumable } from '@angular/fire/storage';
import { FormBuilder, FormGroup, NgForm, NumberValueAccessor, Validators } from '@angular/forms';
import { ActivationEnd } from '@angular/router';
import { CategoriResponse } from 'src/app/shared/interfaces/category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private formBuild: FormBuilder,
    private storsgeIcon: Storage

  ) { }

  public category: Array<CategoriResponse> = [];
  public categoryForn!: FormGroup;
  public active_form = false;
  public edit_status = false;
  public uploadPercent!: number;
  private actionID = 0;
  public open = false

  ngOnInit(): void {
  this.initCategoryForm();
    this.getCategory();
  }

  initCategoryForm(): void {
    this.categoryForn = this.formBuild.group({
      titel: [null, Validators.required],
      link: [null, Validators.required],
      images: [null]
    })
  }


  getCategory(): void {
    this.categoryService.getAll().subscribe(data => {
      this.category = data
    })
  }


  creatCategory() {
    if (this.edit_status) {
      this.categoryService.editAction(this.categoryForn.value, this.actionID).subscribe(() => {
        this.getCategory();
      });
    }
    else {
      this.categoryService.addAction(this.categoryForn.value).subscribe(() => {
        this.getCategory();
      });
    }

    this.edit_status = false;
    this.active_form = false;
    this.categoryForn.reset();
  };


  editCategory(categ: CategoriResponse) {
    this.categoryForn.patchValue({
      titel: categ.titel,
      link: categ.link,
      images: categ.images
    });
    this.active_form = true;
    this.edit_status = true;
    this.actionID = categ.id;
  };


  upload(actionImage: any): void {
 
    const file = actionImage.target.files[0]
    this.loadFIle('icon', file.name, file)
        .then(data => {
        if (this.uploadPercent == 100) {
          this.categoryForn.patchValue({
            images: data
          })
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  async loadFIle(folder: string, name: string, file: File | null): Promise<string> {
    const pathIcon = `${folder}/${name}`
    let urlIcom = '';
    if (file) {
      try {
        const storageRef = ref(this.storsgeIcon, pathIcon);
        const task = uploadBytesResumable(storageRef, file);
        percentage(task).subscribe(data => {
          this.uploadPercent = data.progress;
        })
        await task;
        urlIcom = await getDownloadURL(storageRef)
        console.log(this.uploadPercent);

      } catch (e: any) {
        console.error(e)
      }

    } else {
      console.log('Wtong fike');

    }
    return Promise.resolve(urlIcom);
  }

  delCAtegory(index: CategoriResponse) {
    const task = ref(this.storsgeIcon, index.images);
    deleteObject(task)
    this.categoryService.delAction(index.id).subscribe(() => {
      this.getCategory();
    });
  };


  deleteImage(): void {
    const task = ref(this.storsgeIcon, this.valueByControl('images'));
    deleteObject(task).then(() => {
      console.log('File deleted');
      this.uploadPercent = 0;
      this.categoryForn.patchValue({
        images: null
      })
    })
  }

  valueByControl(control: string): string {
    return this.categoryForn.get(control)?.value;
  }

}
 