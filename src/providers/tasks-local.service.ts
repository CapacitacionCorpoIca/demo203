import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class TasksLocalService {

  constructor(
    public storage: Storage
  ) {}

  save(tasks: any[]){
    return this.storage.set('tasks', JSON.stringify(tasks));
  }

  get(){
    return this.storage.get('tasks');
  }

}
