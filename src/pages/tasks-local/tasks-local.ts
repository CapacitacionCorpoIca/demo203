import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ItemSliding } from 'ionic-angular';

import { TasksLocalService } from '../../providers/tasks-local.service';

@Component({
  selector: 'page-tasks-local',
  templateUrl: 'tasks-local.html'
})
export class TasksLocalPage {

  tasks: any[] = [];
  filter: string = 'all';

  constructor(
    public navCtrl: NavController,
    public tasksLocalService: TasksLocalService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    this.loadTasks();
  }

  openAlertNewTask(){
    let alert = this.alertCtrl.create({
      title: 'Crear tarea',
      message: 'escribe le nombre de la tarea',
      inputs: [
        {
          name: 'title',
          placeholder: 'Digitar nueva tarea.',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data)=>{ 
            data.completed = false;
            this.tasks.unshift( data );
            this.tasksLocalService.save(this.tasks);
          }
        }
      ]
    });
    alert.present();
  }


  openAlertEditTask( task, index, sliding: ItemSliding ){
    task = Object.assign({}, task);
    let alert = this.alertCtrl.create({
      title: 'Editar tarea',
      message: 'escribe el nombre de la tarea',
      inputs: [
        {
          name: 'title',
          value: task.title
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{
            console.log('cancelar');
            sliding.close();
          }
        },
        {
          text: 'Actulizar',
          handler: (data)=>{ 
           task.title = data.title;
           this.tasks[index] = task;
           this.tasksLocalService.save(this.tasks)
           .then(() => {
             sliding.close();
           })
           .catch( error => {
             console.log( error );
             let toast = this.toastCtrl.create({
                message: 'Ups!! ocurrio un error',
                duration: 3000
             });
             toast.present();
           })
          }
        }
      ]
    });
    alert.present();
  }

  updateTask(task, index){
    task = Object.assign({}, task);
    task.completed = !task.completed;
    this.tasks[index] = task;
    this.tasksLocalService.save(this.tasks)
    .then(()=> {})
    .catch( error => {
      console.log( error );
      let toast = this.toastCtrl.create({
        message: 'Ups!! ocurrio un error',
        duration: 3000
      });
      toast.present();
    })
  }

  deleteTask(task: any, index){
    this.tasks.splice(index, 1);
    this.tasksLocalService.save(this.tasks)
    .then(data => {
      let toast = this.toastCtrl.create({
        message: 'Todo bien!',
        duration: 3000
      });
      toast.present();
    })
    .catch( error => {
      console.log( error );
      let toast = this.toastCtrl.create({
        message: 'Ups!! ocurrio un error',
        duration: 3000
      });
      toast.present();
    })
  }

  filterTasks(){
    this.applyFilter();
  }

  private applyFilter(){
    this.tasks.forEach(task => {
      if(this.filter == 'undone') task.hide = true;
      if(this.filter == 'done') task.hide = true;
      if(this.filter == 'all') task.hide = false;
    });
  }

  private loadTasks(){
    this.tasksLocalService.get()
    .then( tasks => {
      if(tasks !== null){
        console.log(tasks);
        console.log(typeof tasks);
        this.tasks = JSON.parse(tasks);
        this.tasks = this.tasks.map(item=>{
          item.hide = false;
          return item;
        })
      }
    })
  }

}
