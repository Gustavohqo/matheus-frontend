import { CategoryDto } from './category.model';

export class SimpleProductDto {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public price: number,
    public primaryImageSrc: string,
    public category: CategoryDto,
  ) {}
}
