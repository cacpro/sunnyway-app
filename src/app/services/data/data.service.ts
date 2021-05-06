import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	url: string = 'https://mysunnywayfoods.com/wp-admin/admin-ajax.php?action=';

	constructor(public http: HTTP) {
	}

	async get(endpoint: string, params?: any, reqOpts?: any) {	
		return await this.http.get(this.url + endpoint, {}, {});
	}
}
