import { CategoryDto } from './category.model';

export class SimpleProductDto {
  constructor(public id: number, public name: string, public price: number, public imageSource: string, public category: CategoryDto) {}
}
