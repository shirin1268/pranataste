import { Component } from '@angular/core';
import {Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage} from '../pages/home/home';
import { AddrecipePage} from '../pages/Recipes/addrecipe/addrecipe';
import {TestPage} from '../pages/test/test';
import {SearchPage} from '../pages/search/search';

@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  rootPage:any = TabsPage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen)
  {
    this.pages = [
      {title: 'Home', component: HomePage},
      {title: 'LatestRecipes', component: TestPage},
      {title: 'AddRecipe', component: AddrecipePage},
      {title: 'Search', component: SearchPage}
    ];
  }
  initializeApp()
  {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}
