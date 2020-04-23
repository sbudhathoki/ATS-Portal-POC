import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { QuestionMasterComponent } from './question-master/question-master.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
//phone mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
//flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
//material.io imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
          MatStepperModule, MatIconModule, MatButtonModule, 
          MatFormFieldModule, MatInputModule, MatListModule, 
          MatCardModule, MatSelectModule, MatRadioModule,
          MatProgressBarModule, MatToolbarModule, MatTooltipModule, MatDialogModule
        } from '@angular/material';    
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { ResultComponent } from './result/result.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { SafeHtmlPipe } from './safe-html.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpErrorInterceptor } from './http-error.interceptor';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {}

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    QuestionMasterComponent,
    QuestionDetailComponent,
    HeaderComponent,
    HomeComponent,
    AcknowledgmentComponent,
    ResultComponent,
    FooterComponent,
    SafeHtmlPipe,
    PageNotFoundComponent
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
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [
    DataService, 
    {provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }