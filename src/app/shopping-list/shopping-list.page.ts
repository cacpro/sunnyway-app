import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ListService } from '../services/data/list.service';
import { MessagesService } from '../services/shared/messages.service';

import { AddListItemPage } from '../add-list-item/add-list-item.page';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
})
export class ShoppingListPage implements OnInit {
  specials: any[] = [];
	custom: any[] = [];
	subscription: Subscription;
  message: any;
  
  constructor(public listProvider: ListService, public messagesProvider: MessagesService, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.initialize();
  }

  public async initialize(){
    let list = await this.listProvider.fetchList();

    if(list)
    {
      this.specials = list.specials;
      this.custom = list.myItems;
    }
		
		this.subscription = this.messagesProvider.getMessage().subscribe(async message => {
			this.message = message;
			
			if(this.message['text'] == 'refresh-list')
			{
				this.specials = [];
				this.custom = [];
				
        let list = await this.listProvider.fetchList();
        
        if(list)
        {
          this.specials = list.specials;
          this.custom = list.myItems;
        }		
			}
		});	
  }

  ngOnInit() {
  }

  public async deleteAllItems(){
		let alert = null;
		
		alert = await this.alertCtrl.create({
			header: 'Are you sure?',
			message: 'Are you sure you want to clear your list?',
			buttons: [
				{
					text: 'Yes',
					handler: async () => {
						let list = await this.listProvider.clearAll();
						this.specials = list.specials;
						this.custom = list.myItems;
						this.messagesProvider.sendMessage('update-savings');
					}
				},
				{
					text: 'No',
					role: 'cancel'
				}
			]	
		});
		
		alert.present();
	}
	
	public async showNewItemModal(){
    const modal = await this.modalCtrl.create({
      component: AddListItemPage,
    });

    await modal.present();
	}
	
	public async removeItem(type, id, categoryName, fromList){
	  await this.listProvider.remove(type, id, categoryName);
    let list = await this.listProvider.fetchList();
    
    if(list)
		{
		  this.specials = list.specials;
			this.custom = list.myItems;
					
			if(fromList)
			{
				this.messagesProvider.sendMessage('update-savings');
			}
		}		
	}
	
	public async updateItem(type, id){		
	  	await this.listProvider.update(type, id, false);
    
		let list = await this.listProvider.fetchList();

		if(list)
		{
		this.specials = list.specials;
		this.custom = list.myItems;
		}
	}
}
