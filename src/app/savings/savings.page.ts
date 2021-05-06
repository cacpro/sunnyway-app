import { Component, OnInit } from '@angular/core';
import { SavingsService } from '../services/data/savings.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.page.html',
  styleUrls: ['./savings.page.scss'],
})
export class SavingsPage implements OnInit {
  savings: any = [];
  savingsData: any = [];
  
  constructor(public savingsProvider: SavingsService, private router: Router) { }

  async ngOnInit() {
    let savings = await this.savingsProvider.fetchSavings(false);
    this.savings = JSON.parse(savings.data);

    if(savings){
      await this.savingsProvider.setLocalSavings(savings);
    }
				
    let savingsData = await this.savingsProvider.fetchSavingsData(true);
    this.savingsData = JSON.parse(savingsData.data);

    if(savingsData){
      await this.savingsProvider.setLocalSavingsData(savingsData);
    }
  }

  openSavingsDetail(slug: string, id: number, name: string, startDate: string, endDate: string):void{
		let savingsData:any = [];

		if(this.savings)
		{
			for(let item of this.savings){
				if(item.category == id)
				{
					savingsData.push(item);
				}
			}
    }
    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        slug: slug,
        name: name,
        savings: JSON.stringify(savingsData),
        startDate: startDate,
        endDate: endDate
      }
    };

    this.router.navigate(['savings-detail'], navigationExtras);
	}
}
