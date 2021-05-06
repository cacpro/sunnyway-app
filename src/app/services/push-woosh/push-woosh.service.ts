import { Injectable } from "@angular/core";
import { Platform } from '@ionic/angular';

import { OptionsService } from '../options/options.service';

declare var cordova : any;

@Injectable()
export class PushWooshService {
    PUSHWOOSH_APP_ID : string =  '37A35-47F6C'; // your pushwoosh app id
    GOOGLE_PROJECT_NUMBER: string = '186191484289'; // project number from firebase

    constructor(public platform : Platform, public optionsProvider: OptionsService){

        this.platform.ready().then(async () => {	
	        
	        let platformName = '';
	        
	        if(this.platform.is('ios'))
	        {
		        platformName = 'iOS';
	        }
			else
			{
				platformName = 'Android';
			}	        
	                
            if(this.platform.is('ios') || this.platform.is('android'))
            {
                await this.initPushwoosh(platformName, this.optionsProvider);
            }
            else
            {
                console.log("PushwooshService init: No compatible platform available.  Skipping init.)");
                return;
            }
        });
    }

    public async initPushwoosh(platformName:string, provider: OptionsService){
        let pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");

          //set push notifications handler
          document.addEventListener('push-notification', function (event) {
            //let message = (event as any).notification.message; // Push message
            let userData = (event as any).notification.userdata; // Custom push data

            if (userData) {
            // handle custom push data here
            console.log('user data: ' + JSON.stringify(userData));
            }

          });

          //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_NUMBER", pw_appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
          pushNotification.onDeviceReady({
              appid: this.PUSHWOOSH_APP_ID,
              projectid: this.GOOGLE_PROJECT_NUMBER
              // serviceName: "MPNS_SERVICE_NAME"
          });

          //register for pushes
          pushNotification.registerDevice(
            async function (status) {
              var pushToken = status;
              
              console.log(pushToken);
              console.log('push token: ' + JSON.stringify(pushToken));                
              
          let optionData: any = {
            deviceid: pushToken['pushToken'],
            type: platformName
          }
          
          let response = await provider.setOptions(optionData);            

            },
            function (status) {
              console.log(JSON.stringify(['failed to register ', status]));
            }
        );
    }

}