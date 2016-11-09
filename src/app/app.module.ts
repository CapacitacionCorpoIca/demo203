import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert';
import { InputsPage } from '../pages/inputs/inputs';
import { OptionsPage } from '../pages/options/options';
import { FormPage } from '../pages/form/form';
import { CompanyFormPage } from '../pages/company-form/company-form';
import { TasksPage } from '../pages/tasks/tasks';
import { TasksLocalPage } from '../pages/tasks-local/tasks-local';
import { TasksSqlitePage } from '../pages/tasks-sqlite/tasks-sqlite';

import { TasksService } from '../providers/tasks.service';
import { TasksLocalService } from '../providers/tasks-local.service';
import { TasksSqliteService } from '../providers/tasks-sqlite.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    InputsPage,
    OptionsPage,
    FormPage,
    CompanyFormPage,
    TasksPage,
    TasksLocalPage,
    TasksSqlitePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertPage,
    InputsPage,
    OptionsPage,
    FormPage,
    CompanyFormPage,
    TasksPage,
    TasksLocalPage,
    TasksSqlitePage
  ],
  providers: [
    Storage,
    TasksService,
    TasksLocalService,
    TasksSqliteService
  ]
})
export class AppModule {}
