import { Component } from '@angular/core';

@Component({
  selector: 'app-yemek',
  templateUrl: './yemek.component.html',
  styleUrls: ['./yemek.component.css']
})
export class YemekComponent {
  yemekler = [
    { name: 'Yemek 1', category: 'ÇORBALAR' },
    { name: 'Yemek 2', category: 'MEZELER' },
    { name: 'Yemek 3', category: 'SALATALAR' },
    { name: 'Yemek 4', category: 'ARA SICAKLAR' },
    { name: 'Yemek 5', category: 'ANA YEMEKLER' },
    { name: 'Yemek 6', category: 'TATLILAR' },
    { name: 'Yemek 7', category: 'İÇECEKLER' },
  ];

  selectedCategories: string[] = [];

  filterMeals(category: string) { //select the meal category and show the meals that are belog to
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    } else {
      this.selectedCategories.push(category);
    }
  }

  isMealVisible(category: string) {
    if (this.selectedCategories.length === 0) {
      return true;
    } else {
      return this.selectedCategories.includes(category);
    }
  }
}
