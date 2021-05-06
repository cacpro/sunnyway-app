import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ListService } from '../services/data/list.service';
import { MessagesService } from '../services/shared/messages.service';

@Component({
  selector: 'app-savings-detail',
  templateUrl: './savings-detail.page.html',
  styleUrls: ['./savings-detail.page.scss'],
})
export class SavingsDetailPage implements OnInit {
  savings:any = [];
	categorySlug:string = '';
	categoryName:string = '';
	subscription: Subscription;
	message: string = '';
  endDate: string = '';
  
  constructor(private route: ActivatedRoute, private router: Router, public listProvider: ListService, public messagesProvider: MessagesService) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.savings) {
        this.savings = JSON.parse(params.savings);
      }

      if (params && params.slug) {
        this.categorySlug = params.slug;
      }

      if (params && params.name) {
        this.categoryName = params.name;
      }

      if (params && params.endDate) {
        this.endDate = params.endDate;
      }
    });

  	this.toggleSavings();
  		
		this.subscription = this.messagesProvider.getMessage().subscribe(message => {
      this.message = message;

      if (this.message['text'] == 'update-savings') {
        this.toggleSavings();
      }
    });	
  }

  ngOnInit() {
  }

  private async toggleSavings():Promise<void>{
    let list = await this.listProvider.fetchList();	  

    if(list)
    {	  		
      if(list['specials'])
      {
        let specials = list.specials;
        let i = 0;
        
        if(this.savings)
        {
          for(let item of this.savings){
            if(item)
            {
              this.savings[i].added = false;
            }
            
            i++;		
          }
          
          i = 0;
          
          for(let item of this.savings){
            for(let specialItem of specials){
              for(let special of specialItem.items){
                if(special.id == item.id)
                {
                  this.savings[i].added = true;	
                }
              }
            }
            
            i++;
          }
        }
      }
    }	  	
  }
  
  toggleItemToList(id, name, pricing, size, description, endDate, added, categoryName):void{
    let i = 0;
    
    for(let item of this.savings){
      if(item.id == id)
      {
        if(item.added)
        {
          this.listProvider.remove('specials', id, categoryName);
        }
        else
        {
          this.listProvider.addToList('specials', name, id, categoryName, pricing, size, description, endDate);
        }
        
        this.savings[i].added = !this.savings[i].added;
      }
      
      i++;
    }  	
  }
}
