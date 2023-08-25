import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from '../services/common/http-client.service';

@Component({
  selector: 'app-admin-yemek',
  templateUrl: './admin-yemek.component.html',
  styleUrls: ['./admin-yemek.component.css']
})
export class AdminYemekComponent {
  constructor(private spinner: NgxSpinnerService, private HttpClientService: HttpClientService){}
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 800);
  }
}
