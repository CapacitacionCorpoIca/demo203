import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TasksService } from '../../providers/tasks.service';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  tasks: {}[] = [];

  constructor(
    public navCtrl: NavController,
    public tasksService: TasksService
  ) {}

  ionViewDidLoad() {
    this.loadTasks();
  }

  private loadTasks(){
    this.tasksService.getAll()
    .then( tasks => {
      this.tasks = tasks;
    })
  }

}
