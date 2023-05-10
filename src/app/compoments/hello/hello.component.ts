import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  myname : string = '';
  
  showname (event:any) : string{
    return this.myname =  event.target.value
  }
}
