import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RecipesService } from '../services/data/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: any[] = [];
	categories: any[] = [];
  selected: number = 0;
  
  constructor(public recipesProvider: RecipesService, private router: Router) { 
    this.initialize();
  }

  ngOnInit() {
  }
	
	public async initialize(){
    let categories: any = await this.recipesProvider.fetchCategories();
    this.categories = JSON.parse(categories.data);
		
    let recipes: any = await this.recipesProvider.fetchRecipes();
    this.recipes = JSON.parse(recipes.data);	
	}

		
	public openRecipesDetail(recipe: any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        recipe: JSON.stringify(recipe),
      }
    };

    this.router.navigate(['recipe-detail'], navigationExtras);
	}
}
