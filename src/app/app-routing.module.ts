import { RestaurantsComponent } from './restaurant/restaurant.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'home', component:RestaurantsComponent},
  { path:'', component:RestaurantsComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'place_order', component: PlaceOrderComponent},
  { path: 'view_all', component: ViewAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Just exports the array instead of the individual arrays
export const routingComponents = [RestaurantsComponent,SignupComponent,PlaceOrderComponent,ViewAllComponent]
