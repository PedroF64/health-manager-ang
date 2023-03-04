import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'health-manager-ang';
  sideBarOpen = true;
  isLoggeIn = true;
  contentMargin = 220;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;

    if(!this.sideBarOpen) {
      this.contentMargin = 60;
    } else {
      this.contentMargin = 220;
    }

  }

}
