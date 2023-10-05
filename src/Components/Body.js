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
    setFilteredRestaurant(data);
    if (data.length === 0 && searchText !== "") {
      setFilteredRestaurant([]);
    }
  }

  if (!allRestaurant) return null;

  return allRestaurant?.length === 0 ? (<Shimmer />) : (
    <>
      <div className="flex flex-col justify-center">

        <div className=" flex my-5 justify-center p-2 border rounded-full w-2/5 mx-auto">
          <input type="text" className="rounded-full text-center" placeholder="Search food" onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button className="bg-black p-2 flex text-white m-2 rounded-full items-center text-center" onClick={Filterdata} >Search</button>
        </div>
        <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-8 mt-8">
          {FilteredRestaurant.map((restaurant) => (
            <Link to={"/restaurantMenu/" + restaurant?.info?.id} key={restaurant?.info?.id}>
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Body