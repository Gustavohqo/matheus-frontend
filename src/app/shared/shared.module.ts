import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { InputErrorService } from './services/input-error.service';

@NgModule({
  declarations: [SelectComponent, InputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [InputErrorService],
  exports: [SelectComponent, InputComponent],
})
export class SharedModule {}
