import { CategoryDto } from './category.model';
import { ProductImageDto } from './product-image.dto';
import { ProductInformationDto } from './product-information.model';
import { ProductSaleDto } from './product-sale.model';
import { SimpleProductDto } from './simple-product.model';

export class ProductDto extends SimpleProductDto {
  constructor(
    id: number,
    code: string,
    name: string,
    price: number,
    primaryImageSrc: string,
    category: CategoryDto,
    public description: string,
    public informations: Array<ProductInformationDto>,
    public sales: Array<ProductSaleDto>,
    public images: Array<ProductImageDto>,
  ) {
    super(id, code, name, price, primaryImageSrc, category);
  }
}
