import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Component } from '@angular/core';
@Component({
 selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First';
  itemsarr:string[]=[];
  addItems(ref:string)
  {
    this.itemsarr.push(ref);
  }
  deleteItem(index)
  {
    this.itemsarr.splice(index,1)
  }
}