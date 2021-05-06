import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class SavingsService {

  constructor(public dataProvider: DataService, public storage: Storage) {
	}

	public async fetchSavings(fromServer: boolean){
		if(fromServer)
		{
			let url = encodeURI("fetchsavings");
			return await this.dataProvider.get(url, null, {});
		}
		else
		{
			let savings = await this.storage.get('savings');
			
			if(!savings)
			{
				let url = encodeURI("fetchsavings");
				return await this.dataProvider.get(url, null, {});
			}
			else
			{
				return savings;
			}			
		}
	}
	
	public async fetchSavingsData(fromServer: boolean){
		if(fromServer)
		{
			let url = encodeURI("fetchsavingsdata");
			return await this.dataProvider.get(url, null, {});	
		}
		else
		{
			let savingsData = await this.storage.get('savingsdata');
			
			if(!savingsData)
			{
				let url = encodeURI("fetchsavingsdata");
				return await this.dataProvider.get(url, null, {});
			}
			else
			{
				return savingsData;
			}			
		}	
	}
	
	public async setLocalSavings(savingsData: any){
		return await this.storage.set('savings', savingsData);	
	}
	
	public async setLocalSavingsData(savingsData: any){
		return await this.storage.set('savingsData', savingsData);		
	}	
}
