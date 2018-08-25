import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";



import { AppComponent } from "./app.component";




import { AppRoutingModule } from "./app-routing.module";

import { RecipesModule } from "./recipes/recipes.module";
import { SharedModule } from "./shared/shared.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { AuthModule } from "./auth/auth.module";
import { CoreModule } from "./core/core.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [CoreModule],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    RecipesModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
