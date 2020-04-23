import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionMasterComponent } from './question-master/question-master.component';
import { ProfileComponent } from './profile/profile.component'
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { ResultComponent } from './result/result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'question', component: QuestionMasterComponent },
  { path: 'acknowledgment', component: AcknowledgmentComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
