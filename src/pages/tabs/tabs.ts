import { Component } from '@angular/core';
import {AddrecipePage} from '../Recipes/addrecipe/addrecipe';
import {HomePage} from '../home/home';
import {TestPage} from '../test/test';
import {SearchPage} from '../search/search';

@Component({
  templateUrl: 'tabs.html',

})
export class TabsPage {

  tab0Root = HomePage;
  tab1Root = TestPage;
  tab2Root = AddrecipePage;
  tab3Root = SearchPage;

  constructor()
  {
    this.tab0Root = HomePage;
    this.tab1Root = TestPage;
    this.tab2Root = AddrecipePage;
    this.tab3Root = SearchPage;
  }

}
