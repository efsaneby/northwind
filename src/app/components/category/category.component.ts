import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
