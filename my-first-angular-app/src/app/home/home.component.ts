import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  totalRecords: number = 0;
  rows: number = 5;
  products: Product[] = [];
  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }

  fetchProducts(page: number, perPage: number) {
    this.productsService.getProducts('https://zany-giggle-vp66j9944wj3qjr-3000.app.github.dev/clothes', {page, perPage}).subscribe((products: Products) => {
      this.products = products.items;
      this.totalRecords = products.total;
    });
  }

  editProduct(product: Product) {
    console.log(product, 'Edit ');
  }

  deleteProduct(product: Product) {
    console.log(product, 'Delete');
  }

  addProduct(product: Product) {
    console.log(product, 'Add');
  }

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }

  onProductOutput(product: Product) {
    console.log(product, 'Output');
  }
}
