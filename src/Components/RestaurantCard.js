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
    aggregatedDiscountInfo,
} = resData;
  
    return (
      <div className='transition-transform transform hover:scale-95'>
      <div className='relative overflow-hidden rounded-lg'>
        <img className='rounded-2xl object-cover w-full h-full' src={CDN_URL + cloudinaryImageId} alt="food-image" />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to transparent '></div>
      </div>
      <div className='ml-3 mt-3'>
        <h2 className='font-semibold text-xl line-clamp-1'>{name}</h2>
        <h2 className='font-semibold text-l'>⭐ {avgRating}</h2>
        <h3 className='line-clamp-1'>{cuisines.join(", ")}</h3>
      </div>
    </div>
    )
  }