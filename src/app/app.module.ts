import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert';
import { InputsPage } from '../pages/inputs/inputs';
import { OptionsPage } from '../pages/options/options';
import { FormPage } from '../pages/form/form';
import { CompanyFormPage } from '../pages/company-form/company-form';
import { TasksPage } from '../pages/tasks/tasks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    InputsPage,
    OptionsPage,
    FormPage,
    CompanyFormPage,
    TasksPage
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
    TasksPage
  ],
  providers: []
})
export class AppModule {}
