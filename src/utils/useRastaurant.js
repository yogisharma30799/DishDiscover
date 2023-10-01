import { useEffect, useState } from "react";


export const FETCH_MENU_URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9122238&lng=77.5923219&restaurantId=";

const useRastaurant = (resId) => {
    const [restaurant, setRestaurant] = useState();
    const [restMenu, setRestMenu] = useState();

    useEffect(() => {
        getRestaurant()
    }, []);

    async function getRestaurant() {
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