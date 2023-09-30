import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export const FETCH_MENU_URL =
"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9122238&lng=77.5923219&restaurantId=";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState();
    
    async function getRestaurant()  {
       const response = await fetch(FETCH_MENU_URL + resId);
        const json = await response.json()
        setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    }

    console.log(restaurant)

    useEffect(() => {
        getRestaurant()
    }, []);
    
        


    return (
        <div>
           <h1> Restaurant id : {resId}</h1>
           <h1> Restaurant name : {restaurant?.name}</h1>
        </div>
    )
}

export default RestaurantMenu;