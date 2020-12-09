export class ProductCreationDto {
  constructor(public name: string, public price: number, public categoryId: number, public imageSource: string, public saleId?: number) {}
}
