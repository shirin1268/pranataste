import { Component } from '@angular/core';
import {TestPage} from '../test/test';
import { AddrecipePage} from '../Recipes/addrecipe/addrecipe';
import {NavController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public gotoTestPage(){
    this.navCtrl.push(TestPage);

  }

  public gotoAddrecipePage(){
    this.navCtrl.push(AddrecipePage);
  }
}
