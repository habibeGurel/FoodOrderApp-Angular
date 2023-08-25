import { Component } from '@angular/core';

@Component({
  selector: 'app-kampanya',
  templateUrl: './kampanya.component.html',
  styleUrls: ['./kampanya.component.css']
})
export class KampanyaComponent {
  kampanyalar = [
    { name: 'kampanya 1', category: 'BANA ÖZEL KAMPANYALAR' },
    { name: 'kampanya 2', category: 'GEÇMİŞ KAMPANYALARIM' },
  ];

  selectedCategories: string[] = [];

  filterKampanya(category: string) {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    } else {
      this.selectedCategories.push(category);
    }
  }

  isKampanyaVisible(category: string) {
    if (this.selectedCategories.length === 0) {
      return true;
    } else {
      return this.selectedCategories.includes(category);
    }
  }
}
