import React from "react";
import { CDN_URL } from "../utils/helper";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    slaString,
    costForTwo,
    aggregatedDiscountInfo } = resData;
  
    return (
        <div className="w-52 p-2 m-2 text-white bg-black">
            <img src= { CDN_URL + cloudinaryImageId} alt="card" />
            <h2 className="font-bold text-lg text-cyan-600">{name}</h2>
            <h3 className="text-sm">{cuisines.join(", ")}</h3>
            <p className="text-xs"> Ratings ⭐{avgRating}</p>
        </div>
    )
  }