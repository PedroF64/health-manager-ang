import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  userNameInput = "";
  firstNameInput = "";
  lastNameInput = "";
  emailInput = "";
  passwordInput = "";
  repeatPasswordInput = "";
  hide = true;

  // TODO
  signup() {}
}
