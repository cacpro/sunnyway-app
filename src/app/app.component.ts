import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ListService } from './services/data/list.service';
import { SavingsService } from './services/data/savings.service';

import { PushWooshService } from './services/push-woosh/push-woosh.service';
import { OptionsService } from './services/options/options.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private listProvider: ListService,
    private savingsProvider: SavingsService,
    private pushWooshProvider: PushWooshService,
    private optionsProvider: OptionsService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
        let list = await this.listProvider.fetchList;

        if(!list)
        {
          await this.listProvider.clearAll();
        }
        
        let savings = await this.savingsProvider.fetchSavings(true);

        if(savings){
          this.savingsProvider.setLocalSavings(savings);
        }
        
        let savingsData = await this.savingsProvider.fetchSavingsData(true);
        if(savingsData){
          this.savingsProvider.setLocalSavingsData(savingsData);
        }		
    });
  }
}
