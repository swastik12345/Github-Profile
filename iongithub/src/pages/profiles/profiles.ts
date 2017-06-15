import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { RepoDetalisPage } from  '../repo-detalis/repo-detalis';

@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {

  profile: any;
  repos: any;
  github_user = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubservice: GithubServiceProvider) {}

  onSubmit(){

    this.getProfile(this.github_user);
    this.github_user='';
  }

  reset(){
    this.profile ='';
    this.github_user ='';
  }

  showRepos(github_user){
  this.getRepos(github_user);
  }

  getProfile(username){
    this.githubservice.getProfile(username).subscribe(response =>{
      this.profile = response;
      console.log(this.profile);
    })
  }

  repoTapper(event, repo){
  this.navCtrl.push(RepoDetalisPage ,{
    repo: repo
  })
  }

   getRepos(username){
   this.githubservice.getRepos(username).subscribe(response =>{
   this.repos= response;
   console.log(this.repos);
   })
   }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

}
