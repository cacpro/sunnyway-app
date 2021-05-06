import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PumpperksService {

  constructor(public dataProvider: DataService, public storage: Storage) { }

  public async fetchAccount(){
	  let account = await this.storage.get('pumpperks');
		return account;
	}
	
	public async clearAccount(){
		let account = {
			number: '',
			redeemableRewards: '',
			expiringRewards: '',
			expiringRewardsDate: ''
		}		
		
    account = await this.storage.set('pumpperks', account);
    return account;
	}
	
	public async updatePumpRewards(accountDetails: {}){
    let account = await this.storage.set('pumpperks', accountDetails);
    return account;			
	}
	
	public async fetchPumpRewards(accountNumber: string){
		let url = encodeURI("fetchpumprewards&account=" + accountNumber);
		return await this.dataProvider.get(url, null, {});		
	}
}
