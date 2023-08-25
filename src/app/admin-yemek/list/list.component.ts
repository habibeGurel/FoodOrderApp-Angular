import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/common/models/product.service';
import { List_Product } from 'src/app/contracts/List_Product';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import Swal from 'sweetalert2';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: List_Product[] = [];
  totalCount: number = 0;


  constructor(private productService: ProductService, private alertifyService: AlertifyService) { }

  async getProducts() {
    try {
      const productData = await this.productService.read(
        () => this.alertifyService,
        (errorMessage: string) => {
          this.alertifyService.message(errorMessage, {
            messageType: MessageType.Error,
            position: Position.TopCenter
          });
        }
      );
      this.totalCount = productData.totalCount;
      this.data = productData.products;
    } catch (error) {
      console.error(error)
    }
  }

  public async selectedFiles() {
    
    const result = await Swal.fire({
      title: 'Yükleme İsteği',
      text: 'Yüklemek istediğinize emin misiniz?',
      html: `<div class="center">
      <ngx-file-drop dropZoneLabel="Drop files here" [accept]="options.accept" (onFileDrop)="selectedFiles ($event)">
          <ng-template ngx-file-drop-content-tmp let-openFileSelector="openFileSelector">
              {{options.explanation}}
              <button type="button" (click)="openFileSelector()">Dosya Seç</button>
          </ng-template>
      </ngx-file-drop>
      <div class="upload-table" *ngIf="files">
          <table class="table">
              <thead>
                  <tr>
                      <th>Seçilenler</th>
                  </tr>
              </thead>
              <tbody class="upload-name-style">
                  <tr *ngFor="let item of files; let i=index">
                      <td><strong>{{item.relativePath}}</strong></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet',
      cancelButtonText: 'İptal'
    });

    if (result.isConfirmed) {

      try {

      } catch (error) {
        console.error(error);
      }
    }
  }
  
  fileUploadOptions: Partial<FileUploadOptions> = {
    action: "upload",
    controller: "Products",
    explanation: "Resimleri sürükleyin veya seçin..",
    accept: ".png, .jpg, .jpeg"
  };

  async ngOnInit() {
    await this.getProducts();
  }

}
