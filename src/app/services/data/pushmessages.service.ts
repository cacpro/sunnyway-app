import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PushmessagesService {
	constructor(public dataService: DataService) {
	}

	public async fetchMessages(){
		let url = encodeURI("fetchpushnotifications");
		return await this.dataService.get(url, null, {});		
	}
}
