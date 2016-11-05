import { FormControl, AbstractControl } from '@angular/forms';

export class CorpoicaValidations{

  static hasNicolas(control: FormControl){
    let value = control.value;
    if(value == 'Nicolas'){
      return {
        'hasnicolas': true
      }
    }
    return null;
  }

  static passwordMatcher(c: AbstractControl){
    let password = c.get('password').value;
    let passwordConfirm = c.get('passwordConfirm').value;
    if(password != passwordConfirm){
      return {
        'nomatch': true
      }
    }
    return null;
  }

}