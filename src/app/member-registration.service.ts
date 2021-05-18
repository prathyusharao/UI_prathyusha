import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberRegistrationService {

  memberid : String = '';
  flow: string = '';
  memberDetails:any;
  constructor(private http:HttpClient) { }

  public doRegister(memberregistration:any){
    const header = new HttpHeaders({'Content-Type':"application/json", 'Accept':'*/*', 'Authorization':'Basic cHJhdGh5dXNoYTpwcmF0aHl1c2hh'});
     return this.http.post("http://localhost:9090/member/register",memberregistration, {headers :header});
  }

  public doSubmit(claims:any){
    const header = new HttpHeaders({'Content-Type':"application/json", 'Accept':'*/*', 'Authorization':'Basic cHJhdGh5dXNoYTpwcmF0aHl1c2hh'});
     return this.http.post("http://localhost:9091/claims/submitclaims",claims, {headers :header});
  }
  public doUpdateMember(memberregistration:any){
    const header = new HttpHeaders({'Content-Type':"application/json", 'Accept':'*/*', 'Authorization':'Basic cHJhdGh5dXNoYTpwcmF0aHl1c2hh'});
     return this.http.put("http://localhost:9090/member/updateMember",memberregistration, {headers :header});
  }

  public doGetMember(memberid:any){
    const header = new HttpHeaders({'Content-Type':"application/json", 'Accept':'*/*', 'Authorization':'Basic cHJhdGh5dXNoYTpwcmF0aHl1c2hh'});
     return this.http.get("http://localhost:9090/member/getMember/"+memberid,{headers :header});
  }
}
