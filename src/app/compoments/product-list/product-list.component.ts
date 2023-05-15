import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Iproduct[] = [
    { _id: 1,name: "luan",price: 200 ,image : "https://res.cloudinary.com/kh-ng-cc/image/upload/v1677675165/js/f7s7tid1ms0iqjiodvo2.jpg"},
    { _id: 2,name: "Chiến ",price: 200 ,image : "https://res.cloudinary.com/kh-ng-cc/image/upload/v1677675438/js/uqcb9vwxizgurw5mqthj.png"},
    { _id: 3,name: "Vinh",price: 200 ,image : "https://res.cloudinary.com/kh-ng-cc/image/upload/v1677660453/php/hgsqwtikakhlxo51xtuw.jpg"},
    { _id: 4,name: "luan",price: 200 ,image : "https://res.cloudinary.com/kh-ng-cc/image/upload/v1677637365/js/lacxynwr9jc8pot5hd1m.jpg"},
  ]
  productName = "";

  product!: Iproduct;

  status : boolean = true;
  change (): void{
    this.status = !this.status
  }
  removeItem(id: any) {
    this.products = this.products.filter(item => item._id !== id)
  }
}
