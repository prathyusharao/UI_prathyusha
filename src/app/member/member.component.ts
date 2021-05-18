import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberRegistrationService } from '../member-registration.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  memberregistration: any={};
  message:any;
  isError: boolean = false;
  
  constructor(
   private router: Router,
   private service:MemberRegistrationService
    ) { }
   
  ngOnInit(){
    this.isError = false;
  }
  public registerNow(){
    let response=this.service.doRegister(this.memberregistration);
    response.subscribe(data=>this.message=data);
    if(undefined !== this.message && null !== this.message 
      && undefined !== this.message.status && null !== this.message.status
      && 'SUCCESS' === this.message.status) {
            //on success redirect to claims
            this.service.memberid = this.message.memberid;
            this.service.flow = 'register';
          this.router.navigate(['/submitclaims']);
      } else {
         this.isError = true;
      }

    //else
    //display error msg in register page
  }

 onSubmit(){
  //this.router.navigate(['/submitclaims']);

 }

 cancel() {
  this.router.navigate([""])
}


}
