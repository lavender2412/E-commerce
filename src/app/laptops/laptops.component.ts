import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import { Product } from '../models/product.model';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit{
  laptops: Product[]=[];
   //inject obj of DataService class
  constructor(private dsObj:DataService){
  }
  ngOnInit(){
    //obj initialization logic
   this.laptops= this.dsObj.getLaptopsData();
  }
}