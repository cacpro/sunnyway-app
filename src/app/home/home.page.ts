import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { MessagesPage } from '../messages/messages.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
	
	}
	
	async showMessages():Promise<void>{
      const modal = await this.modalCtrl.create({
        component: MessagesPage,
      });

      await modal.present();
  }
  
  ngOnInit() {
  }

}
