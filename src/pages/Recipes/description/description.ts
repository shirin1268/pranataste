import { Component} from '@angular/core';
import { NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {RecipeServiceProvider} from '../../../providers/recipe-service/recipe-service';
import {Recipe} from '../shared/recipe.model';


/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-description',
  templateUrl: 'description.html',

})
export class DescriptionPage {


  recipe: Recipe;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private recipeservice: RecipeServiceProvider,
              private toastCtrl: ToastController,
              private alertctrl: AlertController) {
    this.recipe = this.navParams.get('recipe');
  }
  update() {
    this.recipeservice.update(this.recipe)
      .subscribe(recipe => {
        let toast = this.toastCtrl.create({
          message: 'Recipe Updated',
          duration: 1000,
          position: 'top'
        });
        toast.present();
      });
  }

  delete() {
    let alert = this.alertctrl.create({
      title: 'Sure?',
      message: 'Are you sure you want to delete the Recipe?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
        }
      }, {
        text: 'Delete',
        handler: () => {
          //Ask if he wants to delete!!
          this.recipeservice.delete(this.recipe.title)
            .subscribe(() => {
              this.navCtrl.pop().then(() => {
                let toast = this.toastCtrl.create({
                  message: 'Recipe Deleted',
                  duration: 3000,
                  position: 'bottom'
                });
                toast.present();
              });
            });
        }
      }]
    });
    alert.present();
  }

}



