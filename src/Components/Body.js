import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);

  async function getRestaurant() {

    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await response.json();
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  console.log(FilteredRestaurant)

  useEffect(() => {
    getRestaurant()
  }, [])

  const Filterdata = () => {
    const data = FilteredRestaurant.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    setFilteredRestaurant(data)
  }

  if (!allRestaurant) return null;

  return allRestaurant?.length === 0 ? (<Shimmer/>) : (
    <>
      <div className="search">
        <input type="text" className="search-bar" placeholder="Search food" onChange={(e) => {
          setSearchText(e.target.value)
        }} />
        <button className="search-btn" onClick={Filterdata} > search</button>
      </div>
      <div className="card-list">
        {FilteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant.info} />
        ))}
      </div>
    </>
  )
}

export default Body