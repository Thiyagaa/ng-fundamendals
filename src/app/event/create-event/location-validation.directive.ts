import { Directive } from '@angular/core';
import {  NG_VALIDATORS, FormGroup, ValidationErrors, Validator } from '@angular/forms';

@Directive({
	selector: '[locationValidation]',
	providers : [{provide : NG_VALIDATORS,useExisting: LocationValidationDirective, multi: true}]
})
export class LocationValidationDirective implements Validator  {

	validate(control: FormGroup): ValidationErrors | null {
		const addressControl = control.controls['address'];
		const cityControl = control.controls['city'];
		const provinceControl = control.controls['province'];
		const countryControl = control.controls['country'];
		const onlineUrlControl = (<FormGroup>control.root).controls['onlineUrl'];

		if((addressControl && addressControl.value && cityControl && cityControl.value && provinceControl && provinceControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)){
			console.log('Validation Success ');
			return null;
		}else{
			console.log('Validatio nerror ');
			return {locationValidation: false};
		}
	}

}
