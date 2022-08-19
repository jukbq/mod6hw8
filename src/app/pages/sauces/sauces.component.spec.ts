import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaucesComponent } from './sauces.component';

describe('SaucesComponent', () => {
  let component: SaucesComponent;
  let fixture: ComponentFixture<SaucesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaucesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
