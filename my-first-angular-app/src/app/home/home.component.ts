import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService
      .getProducts('https://zany-giggle-vp66j9944wj3qjr-3000.app.github.dev/clothes', { page: 1, perPage: 7 })
      .subscribe((products: Products) => {
        console.log(products);
      });
  }
}
