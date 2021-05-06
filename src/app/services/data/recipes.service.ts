import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(public dataProvider: DataService) { }

  public async fetchCategories(){
	  let url = encodeURI("fetchrecipecategories");
	  return await this.dataProvider.get(url, null, {});			
  }
	
  public async fetchRecipes(){
	  let url = encodeURI("fetchrecipes");
	  return await this.dataProvider.get(url, null, {});			
  }
}
