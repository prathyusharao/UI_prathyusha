import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { MemberRegistrationService } from '../member-registration.service';


@Component({
  selector: 'app-member-login',
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnInit {
  memberregistration: any={};
  message:any;
 // memberDetails:any
  isError: boolean = false;
member:any={

};
  constructor(
    private router: Router,
    private service:MemberRegistrationService
    
    ) {}

  ngOnInit(){
  }

  public login(){
    let response=this.service.doGetMember(this.member.memberid);
    response.subscribe(data=>this.message=data);
    if(undefined !== this.message && null !== this.message &&'SUCCESS' === this.message.status) {
            //on success redirect to claims
            this.service.memberid = this.member.memberid;
            this.service.flow = 'login';
            this.service.memberDetails = this.message;
            console.log(JSON.stringify(this.service.memberDetails));
          this.router.navigate(['/submitclaims']);
      } else {
         this.isError = true;
      }
  
  }
  register(){
    this.router.navigate(["/memberregistration"]);
  }

  

  

 
}
