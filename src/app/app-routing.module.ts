import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { BikesComponent } from './bikes/bikes.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TelevisionsComponent } from './televisions/televisions.component';
//import { TestComponent } from './test/test.component';
//import { TestComponent } from './Test/Test.component';
////import { UsersComponent } from './users/users.component';
//import { UserDetailsComponent } from './userdetails/userdetails.component';
const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'register',component:RegisterComponent},
  { path:'login',component:LoginComponent},
  { path:'contactus',component:ContactusComponent},
  //{path:'test',component:TestComponent},
  //{ path :'users', component : UsersComponent},
  //{ path :'users/:id', component : UserDetailsComponent},

  //{ path:'products',component:ProductsComponent},
  //{ path:'', redirectTo:'/login',pathMatch:'full'}
  { path:'products',component:ProductsComponent,children:[
    {path:'laptops',component:LaptopsComponent},

    { path:"bikes",component:BikesComponent},
    {path:"televisions",component:TelevisionsComponent},
    {path:'',redirectTo:'/products/laptops',pathMatch:'full'}
  ]},
  { path:'', redirectTo:'/login',pathMatch:'full'},

  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }