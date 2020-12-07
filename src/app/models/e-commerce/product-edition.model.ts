import { ProductImageDto } from './product-image.dto';
import { ProductInformationDto } from './product-information.model';
import { ProductSaleDto } from './product-sale.model';

export class ProductEditionDto {
  constructor(
    public code: string,
    public name: string,
    public price: string,
    public categoryId: number,
    public description: string,
    public informations: Array<ProductInformationDto>,
    public sales: Array<ProductSaleDto>,
    public images: Array<ProductImageDto>,
  ) {}
}
