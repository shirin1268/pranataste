import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddrecipePage} from '../pages/Recipes/addrecipe/addrecipe';
import { IonicStorageModule} from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DescriptionPage} from '../pages/Recipes/description/description';
import {RecipeServiceProvider} from '../providers/recipe-service/recipe-service';

import { TestPage} from '../pages/test/test';
import { HttpClientModule} from '@angular/common/http';
import {SearchPage} from '../pages/search/search';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    AddrecipePage,
    DescriptionPage,
    TestPage,
    SearchPage
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    AddrecipePage,
    DescriptionPage,
    TestPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipeServiceProvider,
    Camera
  ]

})
export class AppModule {}
