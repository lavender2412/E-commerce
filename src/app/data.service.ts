import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private laptops:Product[]=[
    {productTitle:"Inspiron 14",
    description:"11th Generation Intel ® Core ™ i5-1135G7 Processor (8MB Cache, up to 4.2 GHz)",
    productImage:"https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/14_5402_non-touch/in5402nt_cnb_00055lf110_gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=688&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=688,402"
    },
    {
    productTitle:"Lenovo IdeaPad",
    description:" Ryzen 5 4500U 14 FHD IPS 2-in-1 Touchscreen Laptop (8GB/512GB SSD/Win 10)",
    productImage:"https://www.lenovo.com/medias/lenovo-laptop-ideapad-flex-5-14inch-amd-gallery-5.jpg?context=bWFzdGVyfHJvb3R8MTY4OTUyfGltYWdlL2pwZ3xoZDEvaDRmLzEwNzk1MDc4NDgzOTk4LmpwZ3w0YzAwMjExN2RlMTc3MzgzNmNjOTg4NDZhYjY0ODJlNzFmZDA4Y2RlNDk1NzZiZGZjMTM2MjNkYTBjNTZkZjU5"
    },
    
    {
    productTitle:"Google Pixel Slate",
    description:"12.3-Inch 2 in 1 Laptop Intel Core m3, 8GB RAM, 64GB, Aspect Ratio 3:2",
    productImage:"https://images-na.ssl-images-amazon.com/images/I/71k%2BKbTBn5L._AC_SL1500_.jpg"
    },
    
    {
    productTitle:"MI Notebook 14 (IC)",
    description:"Intel Core i5-10210U 10th Gen 14-inch (35.56 cms)Thin and Light",
    productImage:"https://images-na.ssl-images-amazon.com/images/I/513XIkrVeuL._AC_SL1100_.jpg"
    },
    
    {
    productTitle:"HP Pavilion 9th Gen",
    description:"Gaming i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX",
    productImage:"https://images-na.ssl-images-amazon.com/images/I/81zeSJ8eh5L._AC_SL1500_.jpg"
    },
    
    {
    productTitle:"Acer Aspire 3",
    description:"Acer Aspire 3 (AMD Ryzen 3/ 8GB/ 1TB HDD/ Windows 10 Home) A315-42 With 39.6 Cm (15.6 Inch) HD Display",
    productImage:"https://static-ecapac.acer.com/media/catalog/product/cache/6523387fa80e14e7b37310b4db9abc2c/a/c/acer-aspire-3-a315-54-54k-42-42g-wp-win10-black-01_1_2_2_2_1.jpg"
    }
  ];

getLaptopsData():Product[]{
  return this.laptops;
}

}