import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {

  constructor(private signUpService: SignUpService) {}

  checkUserNameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges // é um Observável com emissão a cada mudança no "control"
      /** 
       * Transforma a emissão do Observável "a cada mudança" 
       * em "a cada 300ms" 
       */ 
      .pipe(debounceTime(300)) 
      /** 
       * Pipe switchMap: "Troque para novo Observável"
       * Transforma de "valueChanges" para um NOVO Observável 
       * definido na função checkUserNameTaken(), onde este é 
       * inscrito no lugar, substituindo a inscrição anterior.
       */
      .pipe(switchMap(userName => { 
          return this.signUpService.checkUserNameTaken(userName);
      }))
      /**
       * Transforma o booleano do Observável anterior
       * em outro Observável que com um Obj ou null 
       */
      .pipe(map(isTaken => isTaken ? { userNameTaken: true} : null))
      /**
       * Transforma o Observável anterior para considerar apenas a 
       * primeira emissão (ou a primeira que satisfaça alguma função 
       * condicional, se essa existir. No caso, não existe) 
       */
      .pipe(first());
    }
}
}