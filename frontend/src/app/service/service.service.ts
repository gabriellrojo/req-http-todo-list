import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000"

  public getTasks(){
    return this.http.get(`${this.url}/task-list`).pipe(
      res => res
    )
  }

  public addTask(value: string){
    return this.http.post(`${this.url}/task-list`, {task: value, check: false}).pipe(
      res => res
    )
  }

  public deleteTask(id: number){
    return this.http.delete(`${this.url}/task-list/${id}`).pipe(
      res => res
    )
  }

  /* public deleteAll(){
    return this.http.delete(`${this.url}/task-list.json`).pipe(
      res => res
    )
  } */

}
