import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';
import Swal from 'sweetalert2';

declare var $: any

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService
  ) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "assets/delete.png");
    img.setAttribute("style", "cursor: pointer;");
    img.width = 30;
    img.height = 30;
    _renderer.appendChild(element.nativeElement, img)
  }

  @Input() id: string;
  @Input() controller: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  @HostListener("click")

  async onclick() {
    // SweetAlert2 onay penceresi
    const result = await Swal.fire({
      title: 'Silmek istediğinize emin misiniz?',
      text: "Bunu geri alamazsınız!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, sil!'
    });

    // kullanıcı onay verdiyse silme işlemini gerçekleştir
    if (result.isConfirmed) {
      try {
        this.httpClientService.delete({
          controller: this.controller
        }, this.id).subscribe(data => {
          const td: HTMLTableCellElement = this.element.nativeElement;
          $(td.parentElement).fadeOut(1000, () => {
            this.callback.emit();
          });
        })
      } catch (error) {
        console.error(error);
      }
      Swal.fire(
        'Silindi!',
        'Ürün silme başarılı!',
        'success'
      )
    }
  }
}
