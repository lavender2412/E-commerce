import { Component, OnInit } from '@angular/core';
import {Data2Service} from '../data2.service'
import { Product } from '../models/product.model';
@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent  implements OnInit{

  televisions: Product[]=[];
   //inject obj of DataService class
  constructor(private dsObj:Data2Service){
  }
  ngOnInit(){
    //obj initialization logic
   this.televisions= this.dsObj.getTeleData();
  }
}

  