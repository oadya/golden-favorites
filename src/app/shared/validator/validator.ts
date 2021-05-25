import { AbstractControl, ValidatorFn } from "@angular/forms";
import { RegexPatterns } from "../helpers/patternHelper";

export class Validator {

  public static fileExtensionValidator(validExt: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let forbidden = true;
      if (control.value) {
        const fileExt: string = control.value.split('.').pop();
        console.log('** fileExt **' + fileExt);
        validExt.split(',').forEach(ext => {
          if (ext.toLocaleLowerCase().trim() == fileExt.toLocaleLowerCase()) {
            forbidden = false;
          }
        });
      }
      return forbidden ? { 'inValidExt': true } : null;
    }
  };

  public static phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value) {
        if (!RegexPatterns.phonePattern.test(control.value.replace(/[^0-9]*/g, ''))) {
          return { 'inValidPhone': true };
        } else {
          return null;
        }
      }
    };
  }

}
