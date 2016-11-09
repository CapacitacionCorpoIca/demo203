import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, ItemSliding } from 'ionic-angular';

import { TasksSqliteService } from '../../providers/tasks-sqlite.service';

@Component({
  selector: 'page-tasks-sqlite',
  templateUrl: 'tasks-sqlite.html'
})
export class TasksSqlitePage {

  tasks: {}[] = [];
  tasksBackup: any[] = [];
  filter: string = 'all';

  constructor(
    public navCtrl: NavController,
    public tasksSqliteService: TasksSqliteService,
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
            this.tasksSqliteService.create(data)
            .then(response => {
              console.log( response );
              this.tasks.unshift( data );
            })
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
           this.tasksSqliteService.update(task)
           .then( response => {
             console.log( response );
             this.tasks[index] = task;
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
    this.tasksSqliteService.update(task)
    .then( response => {
      console.log( response );
      this.tasks[index] = task;
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

  deleteTask(task: any, index){
    this.tasksSqliteService.delete(task.id)
    .then(response => {
      console.log( response );
      this.tasks.splice(index, 1);
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
    this.tasks = this.applyFilter();
  }

  private applyFilter(){
    if(this.filter == 'undone') return this.tasksBackup.filter(task => !task.completed);
    if(this.filter == 'done') return this.tasksBackup.filter(task => task.completed);
    return this.tasksBackup;
  }

  private loadTasks(){
    this.tasksSqliteService.read()
    .then( tasks => {
      this.tasks = tasks;
      this.tasksBackup = this.tasks;
    })
  }

}
