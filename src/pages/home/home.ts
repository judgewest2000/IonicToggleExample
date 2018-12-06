import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displaySection = false;

  displaySectionToggle() {
    this.displaySection = !this.displaySection;
  }

  constructor(public navCtrl: NavController) {

  }

}
