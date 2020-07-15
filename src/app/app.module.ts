import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './admin/admin/admin-routing.module'

import { AdminModule } from './admin/admin/admin.module'
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
//Angular Material
import { MaterialModule } from 'src/app/material.module';
//components
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { ResultComponent } from './result/result.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { FooterComponent } from './footer/footer.component';
import { DataService } from './data.service';
import { SafeHtmlPipe } from './safe-html.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorNotificationService } from './error-notification.service';
import { InstructionDialogComponent } from './instruction-dialog/instruction-dialog.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactSalesComponent } from './contact-sales/contact-sales.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';

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
    PageNotFoundComponent,
    InstructionDialogComponent,
    TestimonialComponent,
    ContactSalesComponent,
    ContactSupportComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [
    DataService, 
    {provide: HTTP_INTERCEPTORS,
      useClass: ErrorNotificationService,
      multi: true
    },
    ],
    entryComponents: [
      InstructionDialogComponent
    ],  
  bootstrap: [AppComponent]
})
export class AppModule { }