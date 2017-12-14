import { Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {RecipeServiceProvider} from '../../providers/recipe-service/recipe-service';
import {Recipe} from '../Recipes/shared/recipe.model';
import {DescriptionPage} from '../Recipes/description/description';


/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  recipes: Recipe[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpClient,
              private recipeService: RecipeServiceProvider) {
  }


  ionViewWillEnter() {
    this.recipeService
      .getRecipe()
      .subscribe(recipes => {
        this.recipes = recipes;
      });
  }

  recipeSelected(recipe: Recipe) {
    this.navCtrl.push(DescriptionPage, {recipe: recipe})
  }
}
