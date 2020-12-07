import { CartProductDto } from './cart-product.model';

export class CartDto {
  constructor(public id: number, public products: Array<CartProductDto>, public price: number) {}
}
