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
    const data = allRestaurant.filter((restaurant) => restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    setFilteredRestaurant(data);
  }
console.log(FilteredRestaurant,"filterdata")
 
  if (!allRestaurant) return null;

  return allRestaurant?.length === 0 ? (<Shimmer />) : (
    <>
      <div className="flex flex-col justify-center mx-8 sm:mx-14 md:mx-24 lg:mx-44">

        <div className=" flex my-5 justify-center h-12 p-2 border rounded-full w-2/5 mx-auto">
          <input type="text" className="rounded-full text-center" placeholder="Search food" onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button className="bg-black p-1 text-sm flex text-white m-2 rounded-full self-center text-center" onClick={Filterdata} >Search</button>
        </div>
        <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-8 mt-8 mb-10 ">
        {FilteredRestaurant === 0 ? (<h1> No match found </h1>) : 
         ( FilteredRestaurant.map((restaurant) => (
            <Link to={"/restaurantMenu/" + restaurant?.info?.id} key={restaurant?.info?.id}>
              <RestaurantCard resData={restaurant.info} />
            </Link>
          )))}
        </div>
      </div>
    </>
  )
}

export default Body