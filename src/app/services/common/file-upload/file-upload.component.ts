import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertifyService, MessageType, Position } from '../../admin/alertify.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  constructor(private httpClientService: HttpClientService,
    private alertifyService: AlertifyService) { }

  public files: NgxFileDropEntry[];

  @Input() options: Partial<FileUploadOptions>;

  public async selectedFiles(files: NgxFileDropEntry[]) {
    const result = await Swal.fire({
      title: 'Yükleme İsteği',
      text: 'Yüklemek istediğinize emin misiniz?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet',
      cancelButtonText: 'İptal'
    });

    if (result.isConfirmed) {
      this.files = files;
      const fileData: FormData = new FormData();
      for (const file of files) {
        (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
          fileData.append(_file.name, _file, file.relativePath);
        });
      }
      try {
        this.httpClientService.post({
            controller: this.options.controller,
            action: this.options.action,
            headers: new HttpHeaders({"responseType": "blob"})
        }, fileData).subscribe(data => {
          this.alertifyService.message("Dosya başarıyla yüklenmiştir.", {
            messageType: MessageType.Success,
            position: Position.TopRight
          });
        }, (errorResponse: HttpErrorResponse) => {
          this.alertifyService.message("Dosyalar yüklenirken beklenmeyen bir hatayla karşılaşıldı.",{
            messageType: MessageType.Error,
            position: Position.TopRight
          })
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export class FileUploadOptions {
  controller?: string;
  action?: string;
  explanation?: string;
  accept?: string;
}
