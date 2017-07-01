import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
	public username:string = "Edilson Bitencourt";
	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}

  	public soma(n1,n2):void{
  		alert(n1+n2);
  	}
	ionViewDidLoad() {
		//this.soma(2,2);
	}
}
