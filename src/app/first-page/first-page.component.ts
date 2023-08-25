import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {
  constructor(private toastr: ToastrService) {
    toastr.success("Hoşgeldiniz..", "Yemek Sipariş Uygulaması");
  }
}
