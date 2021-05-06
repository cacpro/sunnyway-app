import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { PushmessagesService } from '../services/data/pushmessages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  messages:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pushmessagesService: PushmessagesService, public modalController: ModalController) {
	}

  async ngOnInit() {
    let messages = await this.pushmessagesService.fetchMessages();
    this.messages = JSON.parse(messages.data);
  }

  dismissModal():void{
		this.modalController.dismiss();
	}
}
