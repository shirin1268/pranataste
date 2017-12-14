import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecipeServiceProvider} from '../../../providers/recipe-service/recipe-service';
import {Recipe} from '../shared/recipe.model';


/**
 * Generated class for the AddrecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addrecipe',
  templateUrl: 'addrecipe.html',

})
export class AddrecipePage {

  recipes: Recipe[];
  titleProp='';
  categoryProp='';
  avatarUrlProp='';
  ingredientsProp='';
  descriptionProp='';
  imgUrlProp='';



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private recipeService: RecipeServiceProvider) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddrecipePage');
  }



  create() {
    this.recipeService.createRecipe({ title: this.titleProp,
      category: this.categoryProp,
    avatarUrl: this.avatarUrlProp,
    ingredients: this.ingredientsProp,
    description: this.descriptionProp,
    imgUrl: this.imgUrlProp})
      .subscribe(createdRecipe => {
        this.titleProp = '';
        this.categoryProp = '';
        this.avatarUrlProp='';
          this.ingredientsProp='';
          this.descriptionProp='';
          this.imgUrlProp=''
      });
  }

}
