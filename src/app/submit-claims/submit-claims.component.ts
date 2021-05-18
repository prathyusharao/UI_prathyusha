import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { MemberRegistrationService } from '../member-registration.service';
import { SubmitClaimsService } from '../submit-claims.service';
@Component({
  selector: 'app-submit-claims',
  templateUrl: './submit-claims.component.html',
  styleUrls: ['./submit-claims.component.css']
})
export class SubmitClaimsComponent implements OnInit {
  claims: any={};
  message:any;
  flow : String = '';
  memberid: String = '';
  isError: boolean=false;

  constructor(private router: Router,
    private service:MemberRegistrationService,
    ) { }

    public submitNow(){
      this.claims.memberid = this.service.memberid;
      let response=this.service.doSubmit(this.claims);
      response.subscribe(data=>this.message=data);
      if(undefined !== this.message && null !== this.message &&'SUCCESS' === this.message.status){
        this.isError = false;
      } else {
         this.isError = true;
      }
    }

  ngOnInit(): void {
    this.flow = this.service.flow;
    this.memberid = this.service.memberid;
  }

  cancel() {
    this.router.navigate([""])
  }
}
