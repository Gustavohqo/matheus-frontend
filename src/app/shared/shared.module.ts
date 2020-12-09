import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SelectComponent } from './components/select/select.component';
import { InputErrorService } from './services/input-error.service';

@NgModule({
  declarations: [SelectComponent, InputComponent, LoadingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [InputErrorService],
  exports: [SelectComponent, InputComponent, LoadingComponent],
})
export class SharedModule {}
