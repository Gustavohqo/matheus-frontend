import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectInput } from 'src/app/models/shared/select-input.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit, OnChanges {
  @Input() appearance: 'standard' | 'outline' | 'basic' = 'standard';

  @Input() placeholder?: string;

  @Input() options!: Array<SelectInput>;

  @Input() appFormGroup!: FormGroup;

  @Input() appFormControlName!: string;

  @Input() initialSelectedValue: any;

  @Output() changeValue = new EventEmitter<any>();

  isOpened = false;

  selectedOption?: SelectInput;

  selectedValue?: any;

  inputInsideForm = false;

  ngOnInit(): void {
    this.inputInsideForm = this.appFormGroup != null && this.appFormControlName != null;

    if (this.inputInsideForm) {
      this.selectedOption = this.options.find((option) => JSON.stringify(option.value) === JSON.stringify(this.initialSelectedValue));
      this.selectedValue = this.selectedOption?.value;
    }
  }

  ngOnChanges(): void {
    if (this.inputInsideForm) {
      this.selectedOption = this.options.find((option) => JSON.stringify(option.value) === JSON.stringify(this.initialSelectedValue));
      this.selectedValue = this.selectedOption?.value;
    }
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

  selectOption(option: SelectInput): void {
    this.selectedOption = option;
    this.selectedValue = option.value;
    this.changeValue.emit(option.value);
    this.changeSelectMode();
  }

  changeSelectMode(): void {
    this.isOpened = !this.isOpened;
  }
}
