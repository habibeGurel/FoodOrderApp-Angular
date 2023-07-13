import { Component } from '@angular/core';

@Component({
  selector: 'app-yemek',
  templateUrl: './yemek.component.html',
  styleUrls: ['./yemek.component.css']
})
export class YemekComponent {
  yemekler = [
    { name: 'Yemek 1', category: 'Çorbalar' },
    { name: 'Yemek 2', category: 'Mezeler' },
    { name: 'Yemek 3', category: 'Salatalar' },
    { name: 'Yemek 4', category: 'Ara Sıcaklar' },
    { name: 'Yemek 5', category: 'Ana Yemekler' },
    { name: 'Yemek 6', category: 'Tatlılar' },
    { name: 'Yemek 7', category: 'İçecekler' },
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
