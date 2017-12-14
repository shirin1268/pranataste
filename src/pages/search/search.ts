import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Recipe} from '../Recipes/shared/recipe.model';
import {RecipeServiceProvider} from '../../providers/recipe-service/recipe-service';
import {DescriptionPage} from '../Recipes/description/description';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchTerm: string = '';
  recipes: Recipe[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private recipeservice: RecipeServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.setFilteredItems();
  }

  setFilteredItems() {

    this.recipeservice.filterItems(this.searchTerm).subscribe( recipes=> {
      this.recipes=recipes;
    });

  }
  recipeSelected(recipe: Recipe) {
    this.navCtrl.push(DescriptionPage, {recipe: recipe})
  }

  }

