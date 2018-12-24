import { Component, OnInit } from '@angular/core';
import { SawtoothService } from '../sawtooth.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  users=[];
  clickMessage="";
  servicedata="";

  constructor(private Form:SawtoothService) { 
    console.log("Inside page component.ts")
  }
  ngOnInit() {
  }
  async addForm(userName:string,userAge:string){
   // event.preventDefault();
   
    this.clickMessage="name+age"+userName+userAge;
    
    const servDt =await this.Form.sendData(userName,userAge);
    
    this.servicedata="htis is service dAatta"+servDt;
    //+servDt.toString();
    
  }
}
