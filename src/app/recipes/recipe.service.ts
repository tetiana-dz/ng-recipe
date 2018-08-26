import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe(
      "Spaghetti",
      "Om-nom-nom",
      "https://images-gmi-pmc.edge-generalmills.com/d87c1237-c3e2-401a-b26b-9afc323e503f.jpg",
      [new Ingredient("Meat", 1)]
    ),
    new Recipe(
      "Garbage plate",
      "Delicacy from upstate New York",
      "https://media-cdn.tripadvisor.com/media/photo-s/07/d0/d3/09/nick-tahou-hots.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French fries", 20)]
    ),
    new Recipe(
      "Tasty Burger",
      "Come hungry. Leave happy.",
      "http://www.monngon.tv/uploads/images/2017/06/22/056df664d44b28495605f3ee08485f20-lam-banh-mi-hamburger-sl.jpg",
      [new Ingredient("Cheese", 2), new Ingredient("Tomatoes", 2)]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
