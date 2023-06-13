import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  time:any;
  constructor(private myservice:MyserviceService){}

ngOnInit(){
  this.myservice.getdata().subscribe((data)=>{
     console.log(data);
     this.time = data;
     console.log(this.time);
     JSON.stringify(this.time);
   })
 
  
} 
}
