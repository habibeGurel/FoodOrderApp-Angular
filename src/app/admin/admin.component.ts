import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../services/admin/alertify.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private alertify: AlertifyService){}
  ngOnInit(): void {
    this.alertify.message("Admin sayfasındasınız..", {
      messageType: MessageType.Success,
      position: Position.BottomLeft,
      delay: 2
    })
  }

}
