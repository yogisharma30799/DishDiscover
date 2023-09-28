import React from "react";

export const CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const RestaurantCard = ({cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    slaString,
    costForTwo,
    aggregatedDiscountInfo,}) => {
    return (
        <div className="card">
            <img src= { CDN_URL +
          (cloudinaryImageId === ""
            ? "s6fhwzl0tss0vgrqvcid"
            : cloudinaryImageId)} alt="" />
            <h2>{name}</h2>
            {/* <h3>{food.name}</h3>
            <p> Ratings {rating}</p> */}
     </div>
    )
  }