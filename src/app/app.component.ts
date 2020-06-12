import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'shoppinglist-recipe-book-app';

  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAK2Zvxu5308GwETD2eFxiBDUIWY91NROQ",
    authDomain: "ng-recipe-book-3f038.firebaseapp.com"
    }); 
  }

  // onNavigate(feature: string){
  //   this.loadedFeature = feature;
  // }
}
