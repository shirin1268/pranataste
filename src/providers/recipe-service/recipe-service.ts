import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Recipe} from '../../pages/Recipes/shared/recipe.model';
import {Observable} from 'rxjs/Observable';
import { Storage} from '@ionic/storage';

/*
  Generated class for the RecipeServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeServiceProvider {

items:any;
  constructor(public http: HttpClient,
              private storage: Storage) {

  }



  update(recipe: Recipe) :Observable<Recipe> {
    return Observable.create( observable => {
      this.getRecipe().subscribe( allRecipes => {
        var recipeFound = allRecipes.find(j => j.title === recipe.title);
        if(recipeFound) {
          recipeFound.category = recipe.category;
          recipeFound.ingredients = recipe.ingredients;
          recipeFound.description=recipe.description;
          this.setRecipe(allRecipes).subscribe(() => {
            observable.next(recipeFound);
            observable.complete();
          });
        }
      })

    });
  }

  delete(title: string) :Observable<Recipe[]> {
    return Observable.create( observable => {
      this.getRecipe().subscribe( allRecipes => {
        let allRecipesExceptTitle = allRecipes.filter(j => j.title !== title);
        this.setRecipe(allRecipesExceptTitle).subscribe(() => {
          observable.next(allRecipesExceptTitle);
          observable.complete();
        });
      });
    });
  }
  getRecipe(): Observable<Recipe[]> {
    return Observable.create(observable => {
      this.storage.get('recipes').then(recipes => {
        if (!recipes) {
          recipes = [
            {
              title: 'Normandy-styled onion soup',
              category: 'starter',
              avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png',
              imgUrl: 'http://img.taste.com.au/rtcQR0IY/taste/2016/11/french-onion-soup-2223-1.jpeg',
              ingredients: '5tbsp.unsalted butter, 2 medium yellow onions,thinly sliced, 2 flat-leaf parsley sprigs, ' +
              '2 thyme sprigs, 1 bay leaf, 1 rosemary sprig, 1 cup hard cider, 1⁄4 cup all-purpose flour,' +
              '2 3⁄4 cups chicken stock, Kosher salt and freshly ground black pepper, ' +
              '4 oz. baguette, thinly sliced on the diagonal, 1⁄4 cup heavy cream, 1⁄3 cup grated Gruyere cheese (about 2 oz.)',

              description: '1-In a 4-qt. saucepan, melt 3 tablespoons butter over medium-high heat.' +
              ' Add the onions and cook, stirring, until golden, 6 to 8 minutes. Tie the herbs into a ' +
              'bundle with kitchen twine and add to the pan along with 1⁄2 cup plus 2 tablespoons cider. ' +
              'Bring to a boil, reduce the heat to maintain a simmer, and cook for 5 minutes. Remove the ' +
              'soup from the heat.\n' +
              '2-In a medium saucepan, melt the remaining 2 tablespoons butter over medium heat. Add the ' +
              'flour and cook, stirring constantly, for 2 minutes. Slowly pour in the stock, whisking ' +
              'constantly, and bring to a boil. Reduce the heat to maintain a simmer and cook until slightly' +
              ' reduced, about 15 minutes. Scrape the onions and cider into the stock and cook to marry flavors, ' +
              'about 15 minutes. Discard the herb bundle and season the soup with salt and pepper.\n' +
              '3-Meanwhile, heat the broiler. Spread the baguette slices onto a baking sheet and broil,' +
              ' flipping once, until lightly golden and toasted, about 2 minutes. Spoon the remaining cider' +
              ' between two bowls set on a baking sheet and ladle over the soup. Top each soup with toast and ' +
              'sprinkle with cheese. Drizzle the cream over the cheese and broil the tops until golden and ' +
              'bubbling, about 2 minutes. Serve the soups immediately.'
            },
            {
              title: 'German styled lentil soup',
              category: 'starter',
              avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
              imgUrl: 'http://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/200012-r-xl-german-lentil-soup.jpg?itok=zGbl3_oR',
              ingredients: '',
              description: ''
            },

            {
              title: 'Spaghetti Bolognese',
              category: 'Main dish',
              avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
              imgUrl: 'http://www.tuscanigrill.com/wp-content/uploads/2016/01/4-1-2.jpg',
              ingredients: '',
              description: ''
            },
          ];
          this.storage.set('recipes', recipes);
        }
        observable.next(recipes);
        observable.complete();
      });
    })
  }

  setRecipe(recipes: Recipe[]): Observable<Recipe[]> {
    return Observable.create(observable => {
      this.storage.set('recipes', recipes).then(storedRecipes => {
        observable.next(storedRecipes);
        observable.complete();
      });
    });
  }

  filterItems(searchTerm):Observable<Recipe[]> {
    return Observable.create(observable => this.getRecipe().subscribe(recipes => {
      if(!searchTerm || searchTerm == '') {
        observable.next(recipes);
      }
      else{
        observable.next(recipes.filter((recipe) =>
          recipe.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
        )
      }
      observable.complete();
      })
    );
  }


    createRecipe(recipe: Recipe): Observable<Recipe> {
    return Observable.create(observable => {
      this.getRecipe().subscribe(recipeDB => {

        recipeDB.push(recipe);
        this.setRecipe(recipeDB).subscribe(() => {
          observable.next(recipe);
          observable.complete();
        });
      });
    });
  }
}
