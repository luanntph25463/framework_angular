import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './compoments/hello/hello.component';
import { ProductListComponent } from './compoments/product-list/product-list.component';
import { ProductItemComponent } from './compoments/product-item/product-item.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
