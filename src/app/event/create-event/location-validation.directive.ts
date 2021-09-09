import { Directive } from '@angular/core';
import {  NG_VALIDATORS, FormGroup, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[locationValidation]',
  providers : [{provide : NG_VALIDATORS,useExisting: LocationValidationDirective, multi: true}]
})
export class LocationValidationDirective implements Validator  {

  constructor() { }

  validate(control: FormGroup): ValidationErrors | null {
    let addressControl = control.controls['address'];
    let cityControl = control.controls['city'];
    let provinceControl = control.controls['province'];
    let countryControl = control.controls['country'];
    let onlineUrlControl = (<FormGroup>control.root).controls['onlineUrl'];

    if((addressControl && addressControl.value && cityControl && cityControl.value && provinceControl && provinceControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)){
      console.log("Validation Success ")
      return null;
    }else{
      console.log("Validatio nerror ")
      return {locationValidation: false}
    }
  }

}
