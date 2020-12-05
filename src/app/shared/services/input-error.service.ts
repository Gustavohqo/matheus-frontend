import { FormGroup } from '@angular/forms';

export class InputErrorService {
  getErrorMessage(formGroup: FormGroup, formControlName: string): string | null {
    if (this.isFieldRequired(formGroup, formControlName)) {
      return 'Campo obrigatório';
    }
    if (this.fieldHasMinValue(formGroup, formControlName)) {
      return `Insira um valor maior/igual a ${formGroup.controls[formControlName].errors?.min.min}`;
    }
    if (this.isFieldInteger(formGroup, formControlName)) {
      return 'Insira um valor inteiro';
    }
    return null;
  }

  private isFieldRequired(formGroup: FormGroup, formControlName: string): boolean {
    return formGroup.controls[formControlName].touched && formGroup.controls[formControlName].errors?.required;
  }

  private fieldHasMinValue(formGroup: FormGroup, formControlName: string): boolean {
    return formGroup.controls[formControlName].touched && formGroup.controls[formControlName].errors?.min;
  }

  private isFieldInteger(formGroup: FormGroup, formControlName: string): boolean {
    return formGroup.controls[formControlName].touched && formGroup.controls[formControlName].errors?.integer;
  }
}
