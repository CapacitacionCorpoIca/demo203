import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TasksService {

  path: string = 'https://jsonplaceholder.typicode.com';

  constructor(public http: Http) {
    console.log('Hello Tasks Provider');
  }

  getAll(){
    return this.http.get(`${this.path}/todos?_expand=user`)
    .map(response => response.json())
    .toPromise();
  }

  create(task: any){
    return this.http.post(`${this.path}/todos`, task)
    .map(response => response.json())
    .toPromise();
  }

  update(task: any){
    return this.http.put(`${this.path}/todos/${task.id}`, task)
    .map(response => response.json())
    .toPromise();
  }

  delete(taskId: number){
    return this.http.delete(`${this.path}/todos/${taskId}`)
    .map(response => response.json())
    .toPromise();
  }

}
