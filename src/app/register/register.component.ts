import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  firstNameInput = "";
  lastNameInput = "";
  emailInput = "";
  passwordInput = "";
  hide = true;

  // TODO
  signup() {}
}
