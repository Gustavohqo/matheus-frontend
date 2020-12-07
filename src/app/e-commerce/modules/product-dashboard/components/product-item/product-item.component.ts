import { Component, Input } from '@angular/core';
import { SimpleProductDto } from 'src/app/models/e-commerce/simple-product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product!: SimpleProductDto;
}
