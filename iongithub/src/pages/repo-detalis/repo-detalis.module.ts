import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepoDetalisPage } from './repo-detalis';

@NgModule({
  declarations: [
    RepoDetalisPage,
  ],
  imports: [
    IonicPageModule.forChild(RepoDetalisPage),
  ],
  exports: [
    RepoDetalisPage
  ]
})
export class RepoDetalisPageModule {}
