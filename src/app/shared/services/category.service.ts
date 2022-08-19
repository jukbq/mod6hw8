import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriRequest, CategoriResponse } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoruArr: Array<CategoriResponse> = [];

  private url: any = 'https://angulat-db-jasin.herokuapp.com';
  private api = { comment: `${this.url}/comments` };


  constructor(private http: HttpClient) { }

  getAll(): Observable<CategoriResponse[]> {
    return this.http.get<CategoriResponse[]>(this.api.comment);
  };

  addAction(comment: CategoriRequest): Observable<CategoriResponse> {
    return this.http.post<CategoriResponse>(this.api.comment, comment);
  };


  editAction(comment: CategoriRequest, id: number): Observable<CategoriResponse> {
    return this.http.patch<CategoriResponse>(`${this.api.comment}/${id}`, comment);
  };

  delAction(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.comment}/${id}`);
  }; 



}
