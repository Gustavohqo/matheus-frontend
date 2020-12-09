import { ProductCartDto } from './product-cart.model';

export class CartDto {
  constructor(public id: number, public productsCart: Array<ProductCartDto>, public price: number) {}
}
