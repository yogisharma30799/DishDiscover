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
      <div className=" flex my-5 justify-center">
        <input type="text" className="search-bar" placeholder="Search food" onChange={(e) => {
          setSearchText(e.target.value)
        }} />
        <button className="bg-black hover:bg-blue-900 p-2 flex text-cyan-500  m-2" onClick={Filterdata} > search</button>
      </div>
      <div className="flex flex-wrap px-10">
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