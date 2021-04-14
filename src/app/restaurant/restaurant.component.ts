import { Restaurant } from './../restaurants';
import { Component, OnInit } from '@angular/core';
import { RESTAURANTS } from '../restaurant-list';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantsComponent implements OnInit{
  restaurants = RESTAURANTS;
  selectedRestaurant?: Restaurant;

  constructor(){}

  ngOnInit(){}

  onSelect(restaurant: Restaurant):void{
    this.selectedRestaurant = restaurant;
  }
}


