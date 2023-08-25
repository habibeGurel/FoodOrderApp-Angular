import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/common/models/product.service';
import { Create_Product } from '../../contracts/create_product';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { FileUploadOptions } from '../../services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private productService: ProductService, private alertify: AlertifyService) {
  }

  ngOnInit(): void {
  }
  @Output() fileUploadOptions: Partial<FileUploadOptions> ={
    action: "upload",
    controller: "Products",
    explanation: "Resimleri sürükleyin veya seçin..",
    accept: ".png, .jpg, .jpeg"
  };

  create(category: HTMLSelectElement, name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);
    create_product.category = category.value;

    this.productService.create(create_product, () => {
      this.alertify.message("ürün başarıyla eklenmiştir..", {
        messageType: MessageType.Success,
        position: Position.TopRight,
        delay: 5
      });
    }, errorMessage => {
      this.alertify.message(errorMessage, {
        messageType: MessageType.Error,
        position: Position.TopCenter,
        delay:5
      });
    });
  }
}
