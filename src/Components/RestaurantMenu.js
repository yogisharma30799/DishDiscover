import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_URL } from "./RestaurantCard";
import useRastaurant from "../utils/useRastaurant";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const [restaurant, restMenu] = useRastaurant(resId)

    return (
    <>
    <div>
        <h1> Restaurant id : {resId}</h1>
        <h1> Restaurant name : {restaurant?.name}</h1>
        <img src={CDN_URL + restaurant?.cloudinaryImageId}></img>
    </div>
    <h1 className="font-bold text-xl mt-4 mb-10">
    Recommended items (
    {
      restMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
        () => null
      ).length
    }
    
    )
            </h1>
            
            {restMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((card) => {
                return (
                    <div key={card?.card?.info?.id}>
                        <span >
                          {card?.card?.info?.name}
                        </span>
                        <div >
                          <span>
                            &#8377;
                            {card?.card?.info?.price
                              ? card?.card?.info?.price / 100
                              : 150}
                          </span>
                          {card?.card?.info?.offerTags && (
                            <span >
                              {card?.card?.info?.offerTags[0]?.title} |{" "}
                              {card?.card?.info?.offerTags[0]?.subTitle}
                            </span>
                          )}
                        </div>
                        <div>
                        <img
                          src={
                            card?.card?.info?.imageId
                              ? CDN_URL + card?.card?.info?.imageId
                              : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
                          }
                          alt=""
                        
                        />
                        
                      </div>
                    </div>
                )
            })}
    </>
)
}

export default RestaurantMenu;