import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor(public dataProvider: DataService) { }

  public async setOptions(optionData: {}){
		let url = "addtoken&deviceid=" + optionData['deviceid'] + "&type=" + optionData['type'];
		
		return await this.dataProvider.get(url, null, {});		
	}
}
