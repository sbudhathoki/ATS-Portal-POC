import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { QuestionMasterComponent } from './question-master/question-master.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
//phone mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
//material.io imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
          MatStepperModule, MatIconModule, MatButtonModule, 
          MatFormFieldModule, MatInputModule, MatListModule, 
          MatCardModule, MatSelectModule, MatRadioModule,
          MatProgressBarModule
        } from '@angular/material';    
import { ResultComponent } from './result/result.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    QuestionMasterComponent,
    HeaderComponent,
    HomeComponent,
    ResultComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressBarModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
