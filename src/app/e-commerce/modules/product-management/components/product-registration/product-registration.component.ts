import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryDto } from 'src/app/models/e-commerce/category.model';
import { ProductDto } from 'src/app/models/e-commerce/product.model';
import { SelectInput } from 'src/app/models/shared/select-input.model';
import { CategoryService } from 'src/app/shared/services/api/category.service';
import { ProductService } from 'src/app/shared/services/api/product.service';
import { SaleService } from 'src/app/shared/services/api/sale.service';
import { Location } from '@angular/common';
import { SaleDto } from 'src/app/models/e-commerce/sale.model';
import { ProductCreationDto } from 'src/app/models/e-commerce/product-creation.model';
import { LoadingService } from 'src/app/shared/services/loading.service';

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

  inEditMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private saleService: SaleService,
    private categoryService: CategoryService,
    private location: Location,
    public loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.getSales();
    this.getCategories();
    this.getIdFromRoute();
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      name: new FormControl(this.product?.name, [Validators.required]),
      price: new FormControl(this.product?.price, [Validators.required, Validators.min(0)]),
      category: new FormControl(this.product?.category, [Validators.required]),
      imageSource: new FormControl(this.product?.imageSource, [Validators.required]),
      sale: new FormControl(this.product?.sale, [Validators.required]),
    });
  }

  getIdFromRoute(): void {
    this.subscriptions.push(
      this.activatedRoute.params.subscribe((params) => {
        if (params.id) {
          this.inEditMode = true;
          this.getProduct(params.id);
        } else {
          this.productForm = this.buildForm();
        }
      }),
    );
  }

  getProduct(id: number): void {
    this.loadingService.changeLoading.next(true);

    this.productService.getProduct(id).subscribe({
      next: (product: ProductDto) => {
        this.loadingService.changeLoading.next(false);
        this.product = product;
        this.productForm = this.buildForm();
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  getSales(): void {
    this.loadingService.changeLoading.next(true);

    this.saleService.getSales().subscribe({
      next: (sales: Array<SaleDto>) => {
        this.loadingService.changeLoading.next(false);
        this.sales = sales.map((sale) => new SelectInput(sale.name, sale));
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  getCategories(): void {
    this.loadingService.changeLoading.next(true);

    this.categoryService.getCategories().subscribe({
      next: (categories: Array<CategoryDto>) => {
        this.loadingService.changeLoading.next(false);
        this.categories = categories.map((category) => new SelectInput(category.name, category));
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    if (this.inEditMode) {
      this.editProduct();
    } else {
      this.createProduct();
    }
  }

  editProduct(): void {
    this.loadingService.changeLoading.next(true);

    this.productService.editProduct(this.product?.id, this.buildProductByForm()).subscribe({
      next: () => {
        this.loadingService.changeLoading.next(false);
        this.router.navigate(['e-commerce/product-management']);
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  createProduct(): void {
    this.loadingService.changeLoading.next(true);

    this.productService.createProduct(this.buildProductByForm()).subscribe({
      next: () => {
        this.loadingService.changeLoading.next(false);
        this.router.navigate(['e-commerce/product-management']);
      },
      error: () => this.loadingService.changeLoading.next(false),
    });
  }

  buildProductByForm(): ProductCreationDto {
    const { name, price, category, imageSource, sale } = this.productForm.controls;

    return new ProductCreationDto(name.value, +price.value, category.value.id, imageSource.value, sale.value.id);
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }
}
