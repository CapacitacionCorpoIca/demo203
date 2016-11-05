import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CorpoicaValidations } from '../../validations/validations';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {

  userForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      'name': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
      'lastname': ['', [Validators.required, CorpoicaValidations.hasNicolas]],
      'gender': ['M'],
      'passwordGroup': this.fb.group({
        'password': ['', [Validators.required, Validators.minLength(8)]],
        'passwordConfirm': ['', [Validators.required, Validators.minLength(8)]]
      }, { validator: CorpoicaValidations.passwordMatcher } )
    })
  }

  ionViewDidLoad() {
    console.log('Hello Form Page');
  }

  saveData(){
    console.log(this.userForm.value);
  }

}
