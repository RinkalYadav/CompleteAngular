import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 functionCall(){
  alert("Button is cliked");
  this.otherFuction();
 }
 otherFuction(){
  alert("Other function is called ");
 }
}
