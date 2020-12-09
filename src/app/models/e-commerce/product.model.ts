import { CategoryDto } from './category.model';
import { SaleDto } from './sale.model';
import { SimpleProductDto } from './simple-product.model';

export class ProductDto extends SimpleProductDto {
  constructor(id: number, name: string, price: number, imageSource: string, category: CategoryDto, public sale: SaleDto) {
    super(id, name, price, imageSource, category);
  }
}
