import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email!: string

  constructor(){
    setInterval(()=> {
      this.email += 'a'
    },1000)
  }
}

//since email its two way binded in the template, every time email gets updated, it will also update the template as well