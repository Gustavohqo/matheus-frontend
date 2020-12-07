import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDto } from 'src/app/models/e-commerce/product.model';

@Component({
  selector: 'app-product-deletion-modal',
  templateUrl: './product-deletion-modal.component.html',
  styleUrls: ['./product-deletion-modal.component.scss'],
})
export class ProductDeletionModalComponent {
  @Input() product?: ProductDto;

  @Output() cancel = new EventEmitter();

  @Output() delete = new EventEmitter();

  cancelAction(): void {
    this.cancel.emit();
  }

  deleteProduct(): void {
    this.delete.emit();
  }
}
