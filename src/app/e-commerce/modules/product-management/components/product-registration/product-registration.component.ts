import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryDto } from 'src/app/models/e-commerce/category.model';
import { ProductSaleDto } from 'src/app/models/e-commerce/product-sale.model';
import { ProductDto } from 'src/app/models/e-commerce/product.model';
import { SelectInput } from 'src/app/models/shared/select-input.model';
import { CategoryService } from 'src/app/shared/services/api/category.service';
import { ProductService } from 'src/app/shared/services/api/product.service';
import { SaleService } from 'src/app/shared/services/api/sale.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.scss'],
})
export class ProductRegistrationComponent implements OnInit, OnDestroy {
  productForm!: FormGroup;

  subscriptions: Array<Subscription> = [];

  product?: ProductDto;

  sales: Array<SelectInput> = [];

  categories: Array<SelectInput> = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private saleService: SaleService,
    private categoryService: CategoryService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getSales();
    this.getCategories();
    this.getIdFromRoute();
    this.productForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      code: new FormControl(this.product?.code, [Validators.required]),
      name: new FormControl(this.product?.name, [Validators.required]),
      price: new FormControl(this.product?.price, [Validators.required]),
      category: new FormControl(this.product?.category, [Validators.required]),
      informations: this.formBuilder.array(this.getInformationsForm()),
      images: this.formBuilder.array(this.getImagesForm()),
      sales: this.formBuilder.array(this.getSalesForm()),
    });
  }

  getInformationsForm(): Array<FormGroup> {
    return (
      this.product?.informations.map((information) =>
        this.formBuilder.group({
          label: new FormControl(information.label, [Validators.required]),
          value: new FormControl(information.value, [Validators.required]),
        }),
      ) || []
    );
  }

  getImagesForm(): Array<FormGroup> {
    return (
      this.product?.images.map((image) =>
        this.formBuilder.group({
          src: new FormControl(image.src, [Validators.required]),
        }),
      ) || []
    );
  }

  getSalesForm(): Array<FormGroup> {
    return (
      this.product?.sales.map((sale) =>
        this.formBuilder.group({
          sale: new FormControl(sale, [Validators.required]),
        }),
      ) || []
    );
  }

  getIdFromRoute(): void {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params) => {
        if (params.id) {
          this.getProduct(params.id);
        }
      }),
    );
  }

  getProduct(id: number): void {
    this.subscriptions.push(
      this.productService.getProduct(id).subscribe((product: ProductDto) => {
        this.product = product;
      }),
    );
  }

  getSales(): void {
    this.subscriptions.push(
      this.saleService.getSales().subscribe((sales: Array<ProductSaleDto>) => {
        this.sales = sales.map((sale) => new SelectInput(sale.name, sale));
      }),
    );
  }

  getCategories(): void {
    this.subscriptions.push(
      this.categoryService.getCategories().subscribe((categories: Array<CategoryDto>) => {
        this.categories = categories.map((category) => new SelectInput(category.name, category));
      }),
    );
  }

  addInformationGroup(): void {
    const informationFormArray = this.productForm.controls.informations as FormArray;
    informationFormArray.push(
      this.formBuilder.group({
        label: new FormControl(null, [Validators.required]),
        value: new FormControl(null, [Validators.required]),
      }),
    );
  }

  addImageGroup(): void {
    const imageFormArray = this.productForm.controls.images as FormArray;
    imageFormArray.push(
      this.formBuilder.group({
        src: new FormControl(null, [Validators.required]),
      }),
    );
  }

  addSaleGroup(): void {
    const saleFormArray = this.productForm.controls.sales as FormArray;
    saleFormArray.push(
      this.formBuilder.group({
        sale: new FormControl(null, [Validators.required]),
      }),
    );
  }

  removeFormGroup(formArray: FormArray, index: number): void {
    formArray.removeAt(index);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }

  castControlToFormArray(abstractControl: AbstractControl): FormArray {
    return abstractControl as FormArray;
  }
}
