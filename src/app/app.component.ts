import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Recipe Book";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBHxu-jVb1nVxNLJycE4eTNm73Ozup679Q",
      authDomain: "recipebook-d9ff3.firebaseapp.com"
    });
  }

}
