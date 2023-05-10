  import { Component } from '@angular/core';
  import { NgForm } from '@angular/forms';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: `<h1>{{myName}}</h1>`,
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title : string = 'angular';
    myName = 'Luan Dzai';
    age = '21';
    ml = '21';
    content : string = ''
    student = {
      name :  "luan"
    }
    gettitle () : string{
      return this.content = "ban da dung"
    }
    filterValue:string='';
  filter(event:any){
  this.filterValue=event.target.value;
  }
  userData  ={
    tenDN : '',
    matkhau : ''
  }
  onSubmit(contactForm:NgForm){
    console.log(contactForm.value)
  }
  }
