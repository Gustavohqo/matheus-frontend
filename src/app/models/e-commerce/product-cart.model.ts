import { ProductDto } from './product.model';

export class ProductCartDto {
  constructor(
    public id: number,
    public finalPrice: number,
    public quantity: number,
    public appliedSale: boolean,
    public product: ProductDto,
  ) {}
}
