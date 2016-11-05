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

}
