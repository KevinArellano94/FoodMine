import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  foods: Food[] = [];
  filteredFoods: Food[] = [];
  searchTerm = '';

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
    this.filteredFoods = this.foods;
  }

  filterFoods(): void {
    if (!this.searchTerm) {
      this.filteredFoods = this.foods;
      return;
    }

    this.filteredFoods = this.foods.filter(food =>
      food.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}