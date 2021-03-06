import { Component } from '@angular/core';
import { NavController, AlertController, ItemSliding, ToastController } from 'ionic-angular';

import { TasksService } from '../../providers/tasks.service';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  tasks: {}[] = [];
  tasksBackup: any[] = [];
  filter: string = 'all';

  constructor(
    public navCtrl: NavController,
    public tasksService: TasksService,
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
            this.tasksService.create(data)
            .then(task => {
              this.tasks.unshift( task );
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
           this.tasksService.update(task)
           .then( updatedTask => {
             this.tasks[index] = updatedTask;
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
    this.tasksService.update(task)
    .then( updatedTask => {
      console.log( updatedTask );
      this.tasks[index] = updatedTask;
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
    this.tasksService.delete(task.id)
    .then(data => {
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
    this.tasksService.getAll()
    .then( tasks => {
      this.tasks = tasks;
      this.tasksBackup = this.tasks;
    })
  }

}
