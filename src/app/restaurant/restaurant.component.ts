import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'main', //<main></main>
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent{
    constructor(private toastr: ToastrService){
        toastr.success("Hoşgeldiniz..", "Yemek Sipariş Uygulaması");

    }

}