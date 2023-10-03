import { useEffect, useState } from "react";

const useGetRestaurant = () => {

    const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
    const [allRestaurant, setAllRestaurant] = useState([]);

    useEffect(() => {
        fetchRestaurant()
    }, [])

    async function fetchRestaurant() {
        try {
          const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const json = await response.json();
          setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setAllRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
          // Handle errors here, e.g., display an error message
          console.error("Error fetching restaurant data:", error);
        }
      }
      
    console.log(FilteredRestaurant)
    console.log(allRestaurant)

    return [allRestaurant , setAllRestaurant , FilteredRestaurant , setFilteredRestaurant]


}

export default useGetRestaurant;