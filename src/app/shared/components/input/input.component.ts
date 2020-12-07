import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputErrorService } from '../../services/input-error.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() appearance: 'standard' | 'outline' | 'basic' = 'standard';

  @Input() icon?: string;

  @Input() placeholder?: string;

  @Input() label?: string;

  @Input() appFormGroup!: FormGroup;

  @Input() appFormControlName!: string;

  @Input() type: 'text' | 'number' = 'text';

  @Output() changeValue = new EventEmitter<any>();

  @Input() initialValue: any = null;

  inputInsideForm = false;

  constructor(private inputErrorService: InputErrorService) {}

  ngOnInit() {
    this.inputInsideForm = this.appFormGroup != null && this.appFormControlName != null;
  }

  getTextFieldClass(): string {
    switch (this.appearance) {
      case 'outline':
        return 'text-field--outline';
      case 'basic':
        return 'text-field--basic';
      case 'standard':
      default:
        return 'text-field--standard';
    }
  }

  getErrorMessage(): string | null {
    return this.inputErrorService.getErrorMessage(this.appFormGroup, this.appFormControlName);
  }
}
