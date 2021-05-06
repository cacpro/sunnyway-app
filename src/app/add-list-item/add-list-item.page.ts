import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/shared/messages.service';

import { ListService } from '../services/data/list.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.page.html',
  styleUrls: ['./add-list-item.page.scss'],
})
export class AddListItemPage implements OnInit {
  formSubmitted: boolean = false;
  item: string = '';
  
  constructor(private listProvider: ListService, private messagesProvider: MessagesService, public modalController: ModalController) { }

  ngOnInit() {
  }

  public async addItem(event){
		event.preventDefault();
		this.formSubmitted = true;
		
		if(this.item != '')
		{
			this.formSubmitted = false;
			await this.listProvider.addToList('mine', this.item, null, null, null, null, null, null);
      
      alert('Your item has been added!');
			this.messagesProvider.sendMessage('refresh-list');
			this.item = '';
		}
	}
	
	removeWarning():void{
		this.formSubmitted = false;
	}
	
	dismissModal():void{
	  this.modalController.dismiss();
	}
}
