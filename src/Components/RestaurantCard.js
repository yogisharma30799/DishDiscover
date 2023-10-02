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
        <div className="card">
            <img src= { CDN_URL + cloudinaryImageId} alt="" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <p> Ratings {avgRating}</p>
        </div>
    )
  }