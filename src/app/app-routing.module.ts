import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionMasterComponent } from './question-master/question-master.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { ProfileComponent } from './profile/profile.component'
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'question', component: QuestionMasterComponent },
  { path: 'question/:questionId', component: QuestionDetailComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
