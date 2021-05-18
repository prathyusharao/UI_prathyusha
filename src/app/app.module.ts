import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { SubmitClaimsComponent } from './submit-claims/submit-claims.component';
import { MemberRegistrationService } from './member-registration.service';
import { SubmitClaimsService } from './submit-claims.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MemberLoginComponent } from './member-login/member-login.component';
import { UpdateMemberComponent } from './update-member/update-member.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    SubmitClaimsComponent,
    MemberLoginComponent,
    UpdateMemberComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MemberRegistrationService,
              SubmitClaimsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
