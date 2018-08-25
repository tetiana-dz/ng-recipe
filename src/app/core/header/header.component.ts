import { Component } from "@angular/core";

import { Response } from "@angular/http";

import { Router, ActivatedRoute } from "@angular/router";
import { DataStorageService } from "../../shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";




@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );

  }

  onFetchData() {
    this.dataStorageService.getRecipes();

  }

  onSignOut() {
    this.authService.logOut();
    this.router.navigate(['/recipes'], { relativeTo: this.route })
  }

  isAuth() {
    return this.authService.isAuthenticated();
  }

  isNotAuth() {
    return !this.authService.isAuthenticated();
  }

}
