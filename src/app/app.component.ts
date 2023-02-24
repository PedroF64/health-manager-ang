import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'health-manager-ang';
  sideBarOpen = true;
  isLoggeIn = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
