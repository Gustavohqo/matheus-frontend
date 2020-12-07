import { CategoryDto } from './category.model';
import { SimpleProductDto } from './simple-product.model';

export class CartProductDto extends SimpleProductDto {
  public appliedSale?: string;

  constructor(
    id: number,
    code: string,
    name: string,
    price: number,
    primaryImageSrc: string,
    category: CategoryDto,
    public finalPrice: number,
    public quantity: number,
    appliedSale?: string,
  ) {
    super(id, code, name, price, primaryImageSrc, category);
    this.appliedSale = appliedSale;
  }
}
