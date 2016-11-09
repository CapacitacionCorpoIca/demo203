import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';

@Injectable()
export class TasksSqliteService {

  db: SQLite;

  constructor() {
    this.db = new SQLite();
    this.db.openDatabase({
      name: 'mydb.db',
      location: 'default'
    })
    .then(() => this.createTable())
    .then(rta =>{
      console.log(rta)
    })
    .catch( error => {
      console.log( error );
    })
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
    return this.db.executeSql(sql, {});
  }

  create(task: any){
    let sql = 'INSERT INTO tasks(title, completed) VALUES(?,?)';
    return this.db.executeSql(sql, [task.title, task.completed]);
  }

  update(task: any){
    let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
    //let sql = `UPDATE tasks SET title='${task.title}', completed='${task.completed}' WHERE id='${task.id}'`;
    return this.db.executeSql(sql, [task.title, task.completed, task.id]);
  }

  delete(task: any){
    let sql = 'DELETE FROM tasks WHERE id=?';
    //let sql = `UPDATE tasks SET title='${task.title}', completed='${task.completed}' WHERE id='${task.id}'`;
    return this.db.executeSql(sql, [task.id]);
  }

  read(){
    let sql = 'SELECT * FROM tasks';
    return this.db.openDatabase({
      name: 'mydb.db',
      location: 'default'
    })
    .then(() => this.db.executeSql(sql, []))
    .then(response => {
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
        /*tasks.push({
          id: response.rows.item(index).id,
          title: response.rows.item(index).title,
          completed: response.rows.item(index).completed
        });
        */
      }
      return Promise.resolve( tasks );
    })
  }

}
