import { Component, OnInit } from '@angular/core';
import { PumpperksService } from '../services/data/pumpperks.service';

@Component({
  selector: 'app-pump-perks',
  templateUrl: './pump-perks.page.html',
  styleUrls: ['./pump-perks.page.scss'],
})
export class PumpPerksPage implements OnInit {
  accountNumber: string;
	account: {};
	displayForm: boolean = true;
	loading: boolean = false;
	validExpirationDate: boolean = false;
	rewardDetails: any = {};

  constructor(public pumpPerksProvider: PumpperksService) { 
    this.initialize();
  }

  ngOnInit() {
  }

	public async initialize(){
		let accountDetails = await this.pumpPerksProvider.fetchAccount();
		this.account = JSON.parse(accountDetails.data);
			
		if(this.account)
		{
			if(this.account['accountNumber'])
			{
				let accountNumber = this.account['accountNumber'];
					
				this.displayForm = false;
				let accountDetails = await this.pumpPerksProvider.fetchPumpRewards(this.account['accountNumber']);
				this.account = JSON.parse(accountDetails.data);
						
				if(accountDetails['noRewards'] == 0)
				{
					this.validExpirationDate = true;
				}
						
				this.account['accountNumber'] = accountNumber;
				this.pumpPerksProvider.updatePumpRewards(this.account);
			}
		}		
	}
	
	public async fetchPumpPerks(e){
		e.preventDefault();
		
		this.loading = true;
		
		let accountDetails = await this.pumpPerksProvider.fetchPumpRewards(this.accountNumber);
		this.account = JSON.parse(accountDetails.data);
		this.account['accountNumber'] = this.accountNumber;
		this.loading = false;
		this.displayForm = false;
			
		if(accountDetails['noRewards'] == 0)
		{
			this.validExpirationDate = true;
		}
					
		await this.pumpPerksProvider.updatePumpRewards(this.account);
	}
	
	public async logoutPumpPerks(e){
		e.preventDefault();
		
		await this.pumpPerksProvider.clearAccount();
    
    this.account = {
      number: '',
      redeemableRewards: '',
      expiringRewards: '',
      expiringRewardsDate: ''
    }
			
    this.accountNumber = '';
    this.displayForm = true;
	}
}
