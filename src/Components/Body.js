import React, { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useGetRestaurant from "../utils/useGetRestaurant";



const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [FilteredRestaurant, setFilteredRestaurant] = useGetRestaurant();
  const [allRestaurant, setAllRestaurant] = useGetRestaurant();
  
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
          <Link to= {"/restaurantMenu/" + restaurant?.info?.id} key={restaurant?.info?.id}>
          <RestaurantCard  resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Body