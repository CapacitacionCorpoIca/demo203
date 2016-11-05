import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-company-form',
  templateUrl: 'company-form.html'
})
export class CompanyFormPage {

  companyForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder
  ) {
    this.companyForm = this.fb.group({
      'name': ['', [Validators.required, Validators.pattern('[a-zA-z]*')]],
      'type': ['public', Validators.required],
      'number': ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('Hello CompanyForm Page');
  }

  saveData(){
    console.log(this.companyForm.value);
  }

}
