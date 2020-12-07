export class ProductCreationDto {
  constructor(
    public code: string,
    public name: string,
    public price: string,
    public categoryId: number,
    public description: string,
    public informations: Array<string>,
    public saleIds: Array<number>,
    public images: Array<string>,
  ) {}
}
