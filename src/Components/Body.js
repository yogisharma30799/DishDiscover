import React, { useEffect, useState } from "react";
import { RestaurantsData } from "./Config";
import { RestaurantCard } from "./RestaurantCard";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState(RestaurantsData);

  async function getRestaurant () {

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json)
setRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  useEffect(() => {
    getRestaurant()
},[])

  const Filterdata = ()=> {
   const data = restaurant.filter((restaurant) => restaurant.name.includes(searchText));
    setRestaurant(data)
  }

  return (
    <>
      <div className="search">
        <input type="text" className="search-bar" placeholder="Search food" onChange={(e) => {
          setSearchText(e.target.value)
        }} />
        <button className="search-btn" onClick={Filterdata} > search</button>
      </div>
      <div className="card-list">
        {restaurant.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>
    </>
  )
}

export default Body