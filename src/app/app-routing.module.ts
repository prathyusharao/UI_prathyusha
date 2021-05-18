import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { SubmitClaimsComponent } from './submit-claims/submit-claims.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { UpdateMemberComponent }  from './update-member/update-member.component';

const routes: Routes = [
   { path: 'memberregistration', component: MemberComponent},
   { path: 'submitclaims', component: SubmitClaimsComponent},
    { path: 'memberlogin', component: MemberLoginComponent},
    { path: 'update', component:  UpdateMemberComponent},
    { path: '', component: MemberLoginComponent},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [MemberComponent,SubmitClaimsComponent,DependentsComponent]