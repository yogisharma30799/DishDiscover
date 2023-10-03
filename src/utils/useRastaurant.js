import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "./helper";



const useRastaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [restMenu, setRestMenu] = useState();

    useEffect(() => {
        getRestaurantMenu()
    }, []);

    async function getRestaurantMenu() {
        const response = await fetch(FETCH_MENU_URL + resId);
        const json = await response.json();
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
        // if (restaurant) {
        //     const { name, avgRating, cloudinaryImageId, city, costForTwoMessage } =
        //         restaurant;
        // }
        setRestMenu(json.data?.cards[2]);
    }

    console.log("list", restaurant)
    console.log("restMenu", restMenu)

    // return restuarant data
    return [restaurant, restMenu];

}

export default useRastaurant;