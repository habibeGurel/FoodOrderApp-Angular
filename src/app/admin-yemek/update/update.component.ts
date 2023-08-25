import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/common/models/product.service';
import { UpdateProduct } from 'src/app/contracts/update-product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private productService: ProductService, private alertify: AlertifyService) { }
  @Input() id: string;

  async update(category: HTMLSelectElement, name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    
    const update_product: UpdateProduct = {
      name: name.value,
      stock: parseInt(stock.value),
      price: parseFloat(price.value),
      category: category.value
    };

    (await this.productService.update(update_product)).subscribe(
      result => {
        this.alertify.message('Ürün başarıyla güncellendi.', {
          messageType: MessageType.Success,
          position: Position.TopRight,
          delay: 5
        });
      },
      (errorMessage: string) => {
        this.alertify.message(errorMessage, {
          messageType: MessageType.Error,
          position: Position.TopCenter,
          delay: 5
        });
      }
    );
  }
}
