import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DataService } from './data.service';
import { MessagesService } from '../shared/messages.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(public dataProvider: DataService, public storage: Storage, public messagesProvider: MessagesService){
	}	

  private guidPart(): string{
		return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
	}
	
	private guid(): string{
		return (this.guidPart() + this.guidPart() + "-" + this.guidPart() + "-4" + this.guidPart().substr(0,3) + "-" + this.guidPart() + "-" + this.guidPart() + this.guidPart() + this.guidPart()).toLowerCase();
	}
	
	public async fetchList(){
		return await this.storage.get('list');
	}
	
	public async clearAll(){
		let list = {
			specials: [],
			myItems: []				
		};
		
    await this.storage.set('list', list);
    
    return list;
	}
	
	public async addToList(type, name, id, categoryName, price, size, details, expiration){
		let list = await this.storage.get('list');
						
    if(type == 'mine')
    {
      if(list)
      {
        if(list['myItems'])
        {
          list['myItems'].push({id: this.guid(), title: name, checked: false});
        }
        else
        {
          let myItems = [{id: this.guid(), title: name, checked: false}];
          list['myItems'] = myItems;
        }
      }
      else
      {
        list = {
          specials: [],
          myItems: []
        }
        
        list['myItems'].push({id: this.guid(), title: name, checked: false});
      }				
      
      await this.storage.set('list', list);
    }
    else
    {
      let found = false;
      let i = 0;
      
      if(list)
      {
        for(let item of list.specials){
          if(item.category == categoryName)
          {
            item.items.push({'id': id, 'title': name, 'price': price, 'size': size, 'details': details, 'expiration': expiration, 'checked': false});
            found = true;
            list['specials'][i] = item;
          }
          
          i++;
        }
      }
      
      if(!found)
      {					
        list['specials'].push({category: categoryName, 'items': [{'id': id, 'title': name, 'price': price, 'size': size, 'details': details, 'expiration': expiration, 'checked': false}]});
      }
      
      await this.storage.set('list', list);
      this.messagesProvider.sendMessage('refresh-list');
    }	
	}
	
	public async update(type, id, refresh: false){
    let list = await this.storage.get('list');
    
    if(type == 'mine')
    {
      if(list.myItems)
      {
        for(let item of list.myItems)
        {
          if(item.id == id)
          {
            item.checked = !item.checked;
          }
        }
      }
    }
    else
    {
      if(list.specials)
      {
        for(let grouping of list.specials){
          for(let item of grouping.items){
            if(item.id == id)
            {
              item.checked = !item.checked;
            }
          }
        }
      }		
    }
			
    await this.storage.set('list', list);
    
    if(refresh)
    {
      this.messagesProvider.sendMessage('refresh-list');
    }	

    list = await this.storage.get('list');
	}
	
	public async remove(type, id, categoryName){
    let list = await this.storage.get('list');
    
    if(type == 'mine')
    {		
      let i = 0;
      
      if(list.myItems)
      {	
        for(let item of list.myItems)
        {
          if(item.id == id)
          {
            list.myItems.splice(i, 1);	
          }
          
          i++;
        }
      }

      await this.storage.set('list', list);
      this.messagesProvider.sendMessage('refresh-list');
    }
    else
    {
      let i = 0;
      
      if(list.specials)
      {
        for(let item of list.specials){
          if(item.category == categoryName)
          {
            let j = 0;
            
            for(let specialItem of item.items){
              if(specialItem.id == id)
              {
                list.specials[i].items.splice(j, 1);
              }
              
              j++;
            }
          }
          
          i++;
        }				
      }
      
      await this.storage.set('list', list);
      this.messagesProvider.sendMessage('refresh-list');
    }
	}	
}
