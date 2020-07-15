import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionMasterComponent } from './question-master/question-master.component';
import { ProfileComponent } from './profile/profile.component'
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { ResultComponent } from './result/result.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ContactSalesComponent } from './contact-sales/contact-sales.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'question', component: QuestionMasterComponent },
  { path: 'acknowledgment', component: AcknowledgmentComponent },
  { path: 'result', component: ResultComponent },
  { path: 'sales', component: ContactSalesComponent} ,
  { path: 'support', component: ContactSupportComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
