import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RepoDetalisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-repo-detalis',
  templateUrl: 'repo-detalis.html',
})
export class RepoDetalisPage {

  selectedRepo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.selectedRepo=navParams.get('repo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoDetalisPage');
  }

}
