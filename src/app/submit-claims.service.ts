import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubmitClaimsService {

  memberid : String = '';
  flow: string = '';

  constructor(private http:HttpClient) { }

   
}
