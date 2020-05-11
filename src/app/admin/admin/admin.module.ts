import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { ListUsersComponent } from '../list-users/list-users.component';
//Services
import { AdminService } from '../admin.service';
//Angular Material
import { MaterialModule } from 'src/app/material.module';

//phone mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {}

@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxMaskModule.forRoot(options)
  ],
  providers: [AdminService]
})
export class AdminModule { }
