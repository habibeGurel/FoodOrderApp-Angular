import { Component, OnInit } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-admin-siparis',
  templateUrl: './admin-siparis.component.html',
  styleUrls: ['./admin-siparis.component.css']
})
export class AdminSiparisComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide();
    }, 800);
  }
}
