import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  constructor() { }
  private televisions:Product[]=[
    {
      productTitle:"Samsung 138 cm (55 inches)",
      description:"Samsung 138 cm (55 inches) Crystal 4K Series Ultra HD Smart LED TV UA55AUE60AKLXL (Black) (2021 Model)",
      productImage:"https://images-na.ssl-images-amazon.com/images/I/61GwJAhftvS._AC_SL1500_.jpg"
      },
      {
        productTitle:"AmazonBasics 81cm (32 inches)",
        description:"AmazonBasics 81cm (32 inches) Fire TV Edition HD Ready Smart LED TV AB32E10SS (Black) new model",
        productImage:"https://m.media-amazon.com/images/I/811j4G5MJML._AC_UY327_FMwebp_QL65_.jpg"
        },
        {
          productTitle:"Mi 80 cm (32 inches)",
          description:"Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO|L32M5-AL (Black) exclusive prime edition available 2020-2021 MI",
          productImage:"https://m.media-amazon.com/images/I/71qOOWyfc7L._AC_UY327_FMwebp_QL65_.jpg"
          },
          {
            productTitle:"OnePlus 80 cm (32 inches)",
            description:"OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model) available now instock",
            productImage:"https://m.media-amazon.com/images/I/81qtALn+GpL._AC_UY327_FMwebp_QL65_.jpg"
            },
            {
              productTitle:"LG 80 CM (32 inches)",
              description:"LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray) (2020 Model)",
              productImage:"https://m.media-amazon.com/images/I/71uKCdULRgL._AC_UY327_FMwebp_QL65_.jpg"
              },

              {
                productTitle:"eAirtec 61 cms (24 inches)",
                description:"eAirtec 61 cms (24 inches) HD Ready LED TV 24DJ (Black) (2020 Model)",
                productImage:"https://m.media-amazon.com/images/I/71FutyZQeXL._AC_UY327_FMwebp_QL65_.jpg"
                }
  ];
  getTeleData():Product[]{
    return this.televisions;
  } 
}
