import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsComponent } from './products/products.component';
@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor() { }
  private bikes:Product[]=[
{
    productTitle:"Baybee Mini",
    description:"R1 Battery Operated Ride On Bike for Kids/Toddler Bikes for Babies/Children Bikes",
    productImage:"https://m.media-amazon.com/images/I/71JBS3yzHWL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
    productTitle:"Baybee Vespa",
    description:" Rechargeable Battery Operated Ride-on Bike and Baby Ride on/Kids Ride on Toys",
    productImage:"https://m.media-amazon.com/images/I/71xtzBGVBhL._AC_UL480_FMwebp_QL65_.jpg"
    },
    
    {
    productTitle:"Maisto Ducati",
    description:"Maisto Ducati 1199 Panigale (for above 3 years) kids toys/toddler toys category pick",
    productImage:"https://images-na.ssl-images-amazon.com/images/I/413BIdi%2BeHL._AC_.jpg"
    },
    
    {
    productTitle:"Maisto Kawasaki Ninja H2R",
    description:"Miniature die cast scale model Licensed scaled model of the actual vehicle",
    productImage:"https://images-na.ssl-images-amazon.com/images/I/71c7-154VDL._AC_SL1250_.jpg"
    },
    
    {
    productTitle:"Maisto Diecast Bike BMW",
    description:"S1000RR 1:18 Scale Model Toy Bike - Green,Die cast Model brand maisto diecast model",
    productImage:"https://images-na.ssl-images-amazon.com/images/I/71U0awe23NL._AC_SL1500_.jpg"
    },
    
    {
      productTitle:"Maisto Kawasaki Ninja H2R",
      description:"Miniature die cast scale model Licensed scaled model of the actual vehicle kawasaki",
      productImage:"https://images-na.ssl-images-amazon.com/images/I/71c7-154VDL._AC_SL1250_.jpg"
      }
    ];
    getBikesData():Product[]{
      return this.bikes;
    }
    }
