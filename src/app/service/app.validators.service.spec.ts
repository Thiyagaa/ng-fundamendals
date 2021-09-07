import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormControl } from '@angular/forms';

import { restrictedWords } from './app.validators.service';

describe('App.ValidatorsService', () => {

  it('should give validation error when a restricted keyword is found', () => {
    let response = restrictedWords(["foo","bar"]);
    expect(response(new FormControl('foo found'))).toEqual({restrictedWords: 'foo'})
  });

  it('should give validation error and list', () => {
    let response = restrictedWords(["foo","bar","mar"]);
    expect(response(new FormControl('foo found mar bar'))).toEqual({restrictedWords: 'foo,bar,mar'})
  });

  it('should give validation error and list', () => {
    let response = restrictedWords(["foo","bar","mar"]);
    expect(response(new FormControl('No word matches in the string'))).toBeNull()
  });
});
