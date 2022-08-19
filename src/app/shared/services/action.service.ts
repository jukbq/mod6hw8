import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ActionRequest, ActionResponse } from '../interfaces/action';

@Injectable({
  providedIn: 'root'
})

export class ActionService {

private actionArr: Array<ActionResponse> = [];

  private url: any = 'https://angulat-db-jasin.herokuapp.com';
  private api = { actions: `${this.url}/action` };


  
  constructor(private http: HttpClient) { };

  getAll(): Observable<ActionResponse[]> {
    return this.http.get<ActionResponse[]>(this.api.actions);
  };


  addAction(action: ActionRequest): Observable<ActionResponse> {
    return this.http.post<ActionResponse>(this.api.actions, action);
  };


   editAction(action: ActionRequest, id: number): Observable<ActionResponse> {
    return this.http.patch<ActionResponse>(`${this.api.actions}/${id}`, action);
  };

  delAction(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.actions}/${id}`);
  }; 
 

}
