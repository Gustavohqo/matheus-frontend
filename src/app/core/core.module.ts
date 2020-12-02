import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [HeaderComponent, SearchBarComponent],
  imports: [CommonModule, RouterModule],
  providers: [],
  exports: [HeaderComponent, SearchBarComponent],
})
export class CoreModule {}
