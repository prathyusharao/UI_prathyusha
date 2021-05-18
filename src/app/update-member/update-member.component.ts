import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { MemberRegistrationService } from '../member-registration.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {
  memberregistration: any={};
  message:any={};
  isError: boolean = false;
  constructor(private router: Router,
    private service:MemberRegistrationService ) { }

public update(){
  let response=this.service.doUpdateMember(this.memberregistration);
  response.subscribe(data=>this.message=data);
  if(undefined !== this.message && null !== this.message &&'SUCCESS' === this.message.status){
    this.isError = false;
  } else {
     this.isError = true;
  }
   
} 
  ngOnInit(): void {
    if(undefined !== this.service.memberDetails && null !== this.service.memberDetails) {
      this.memberregistration.dependent1dob=this.service.memberDetails.dependent1dob;
      this.memberregistration.dependent2dob=this.service.memberDetails.dependent2dob;
      this.memberregistration.dependent1name=this.service.memberDetails.dependent1name;
      this.memberregistration.dependent2name=this.service.memberDetails.dependent2name;
      this.memberregistration.dob = this.service.memberDetails.dob;
      this.memberregistration.memberid = this.service.memberDetails.memberid;
      this.memberregistration.state = this.service.memberDetails.state;
      this.memberregistration.country = this.service.memberDetails.country;
      this.memberregistration.contactno = this.service.memberDetails.contactno;
    } else {
      let response=this.service.doGetMember(this.service.memberid);
      response.subscribe(data=>this.message=data);
      if(undefined !== this.message && null !== this.message &&'SUCCESS' === this.message.status) {
        this.memberregistration.dependent1dob=this.message.dependent1dob;
        this.memberregistration.dependent2dob=this.message.dependent2dob;
        this.memberregistration.dependent1name=this.message.dependent1name;
        this.memberregistration.dependent2name=this.message.dependent2name;
        this.memberregistration.memberid = this.message.memberid;
        this.memberregistration.contactno = this.message.contactno;
        this.memberregistration.state = this.message.state;
        this.memberregistration.country = this.message.country;
        
      } else {
         this.isError = true;
      }
     
    }
    console.log(JSON.stringify(this.memberregistration));
   
  }
  cancel() {
    this.router.navigate([""])
  }

}
