import React from "react";
import { RestaurantsData } from "./Config";


export const RestaurantCard = (restaurant) => {
  return (
    <div className="card">
      {RestaurantsData.map((restaurant) => (
        <div key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <p>Cuisine: {restaurant.cuisine}</p>
          <p>Rating: {restaurant.rating}</p>
          <p>Delivery Time: {restaurant.deliveryTime} minutes</p>
          <img src={restaurant.image} alt={restaurant.name} />
          <h3>Menu:</h3>
          <ul>
            {restaurant.dishes.map((dish) => (
              <li key={dish.id}>
                <h4>{dish.name}</h4>
                <p>Price: ${dish.price}</p>
                <img src={dish.photo} alt={dish.name} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}