import { Component, OnInit } from '@angular/core';
import {Data1Service} from '../data1.service'
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})

export class BikesComponent implements OnInit{
  bikes: Product[]=[];
   //inject obj of DataService class
  constructor(private dsObj:Data1Service){
  }
  ngOnInit(){
    //obj initialization logic
   this.bikes= this.dsObj.getBikesData();
  }
}