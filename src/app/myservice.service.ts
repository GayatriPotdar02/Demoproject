import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  timeApi = "https://time.abstractapi.com/v1/convert_time";
  constructor(private http:HttpClient ) {  }


  getdata(){
    return this.http.get(this.timeApi);
  }
}
