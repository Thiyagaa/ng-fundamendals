import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('');

export interface Toastr{
  success(msg:string,title?:string):void;
  info(msg:string,title?:string):void;
  warn(msg:string,title?:string):void;
  error(msg:string,title?:string):void;
}