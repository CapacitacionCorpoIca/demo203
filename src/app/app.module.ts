import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert';
import { InputsPage } from '../pages/inputs/inputs';
import { OptionsPage } from '../pages/options/options';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    InputsPage,
    OptionsPage
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
    OptionsPage
  ],
  providers: []
})
export class AppModule {}
