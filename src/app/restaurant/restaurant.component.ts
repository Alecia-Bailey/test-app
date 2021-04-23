
import { Restaurant } from './../restaurants';
import { Component, OnInit } from '@angular/core';
import { RESTAURANTS } from '../restaurant-list';


@Component({
  selector: 'app-restaurant',
  templateUrl: 'restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

// implements OnInit

export class RestaurantsComponent {
  restaurants = RESTAURANTS;
  selectedRestaurant?: Restaurant;
  getName(){
    alert("Button clicked")
  }

  signup(){
    alert("Sign up button clicked")
  }

  constructor(){}

  // ngOnInit(){}

  onSelect(restaurant: Restaurant):void{
    this.selectedRestaurant = restaurant;
  }
}

