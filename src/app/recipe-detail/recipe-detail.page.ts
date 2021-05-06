import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: any;
	
	constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.recipe) {
        this.recipe = JSON.parse(params.recipe);
        console.log(this.recipe);
      }
    });
	}	

  ngOnInit() {
  }

	public async openLink(event, link){
		event.preventDefault();
    await Browser.open({ url: 'mailto:?body=' + link + '&subject=Check out this Recipe from Sunnyway' });
  }
}
