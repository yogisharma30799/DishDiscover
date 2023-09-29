import React from "react";

export const CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
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