import { Component } from '@angular/core';
import { SelectInput } from 'src/app/models/shared/select-input.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  sizes = [
    new SelectInput('P', 1),
    new SelectInput('PP', 2),
    new SelectInput('M', 3),
    new SelectInput('G', 4),
    new SelectInput('GG', 5),
    new SelectInput('GGG', 6),
  ];
}
