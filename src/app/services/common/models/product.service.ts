import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { List_Product } from 'src/app/contracts/List_Product';
import { Observable, first, firstValueFrom } from 'rxjs';
import { UpdateProduct } from 'src/app/contracts/update-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  create(product: Create_Product, SuccessCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClientService.post({
      controller: "Products"
    }, product).subscribe(result => {
      SuccessCallBack();
    }, (errorResponse: HttpErrorResponse) => {
      const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
      let message = "";
      _error.forEach((v, index) => {
        v.value.forEach((_v, _index) => {
          message += `${_v}<br>`;
        });
      });
      errorCallBack(message);
    });
  }
  async read(SuccessCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number, products: List_Product[] }> {
    const promiseData: Promise<{ totalCount: number, products: List_Product[] }> = this.httpClientService.get<{ totalCount: number, products: List_Product[] }>({
      controller: "Products"
    }).toPromise();

    promiseData.then(d => SuccessCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "Products"
    }, id);
    await firstValueFrom(deleteObservable);
  }

  //  async update(product: UpdateProduct, SuccessCallBack?: () => void, errorCallBack?: (errorMessage: string) => void){
  //   this.httpClientService.put({
  //     controller:"Products"
  //   }, product).subscribe(result => {
  //     SuccessCallBack();
  //   }, (errorResponse: HttpErrorResponse) => {
  //     const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
  //     let message = "";
  //     _error.forEach((v, index) => {
  //       v.value.forEach((_v, _index) => {
  //         message += `${_v}<br>`;
  //       });
  //     });
  //     errorCallBack(message);
  //   });
  // }
  async update(product: UpdateProduct, SuccessCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<Observable<any>> {
    const updateObservable = new Observable<any>(observer => {
      this.httpClientService.put({
        controller: "Products",
        action:"Put"
      }, product).subscribe(
        result => {
          SuccessCallBack();
          observer.next(result);
          observer.complete();
        },
        (errorResponse: HttpErrorResponse) => {
          const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
          let message = "";
          _error.forEach((v, index) => {
            v.value.forEach((_v, _index) => {
              message += `${_v}<br>`;
            });
          });
          errorCallBack(message);
          observer.error(errorResponse);
          observer.complete();
        }
      );
    });
    return updateObservable;
  }
  
  
}
