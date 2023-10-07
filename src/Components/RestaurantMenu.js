import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/helper";
import useRastaurant from "../utils/useRastaurant";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const RestaurantMenu = () => {

    const { resId } = useParams();
    const [restaurant, restMenu] = useRastaurant(resId)
    const dispatch = useDispatch();

    const addFoodItem = (card) => {
        dispatch(addItem(card))
    }

    console.log(restaurant, "restaurant")

    return (
        <div className="mx-8 sm:mx-14 md:mx-24 lg:mx-44">
            <div className="">
                <small className=""> <Link to="/">Home/</Link> </small>
                <small className="">{restaurant?.city} / </small>
                <small className="">{restaurant?.name}</small>
            </div>

            <div className="flex justify-between border-b-2 border-dashed p-4">
                <div className="flex flex-col">
                    <h1 className="font-bold text-xl">{restaurant?.name}</h1>
                    <p>{restaurant?.areaName}</p>
                    <p>{restaurant?.locality}</p>
                </div>
                <div className="flex flex-col border p-2">
                    <h1 className="font-bold text-xl p-2 border-b">⭐{restaurant?.avgRating}</h1>
                    <p >{restaurant?.totalRatingsString}</p>
                </div>
            </div>

            <div className="flex items-center gap-x-3 p-4 border-b-2">
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" strokeWidth="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path>
                </svg><h3>{restaurant?.sla?.deliveryTime} Minutes </h3>
                <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
                <p>{restaurant?.costForTwoMessage} </p>
            </div>

            {/* <div>
                <ul>
                    {restaurant?.aggregatedDiscountInfoV2?.shortDescriptionList?.meta?.map((offer) => {
                        return (
                            <li>{offer}</li>
                            )
                    })}
                </ul>
            </div> */}



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
                    <div className="flex justify-between mb-2 mx-auto p-2 border-b-2" key={card?.card?.info?.id}>

                        <div>
                            <h1 className="font-bold text-lg">{card?.card?.info?.name}</h1>
                            <p className=" text-base">&#8377;{card?.card?.info?.price / 100}</p>
                        </div>

                        <div className='flex flex-col justify-center items-center '>
                            <img src={card?.card?.info?.imageId
                                        ? CDN_URL + card?.card?.info?.imageId
                                        : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"} className='h-24 w-[118px] border border-[#d4d5d9] rounded-lg shadow-md' alt="menuItem" />
                            <div className='flex w-20 md:w-24 h-9 rounded-lg text-sm font-semibold bg-black text-center border shadow-md'>
                                <button
                                    className=" text-[#60b246] w-full g-full cursor-pointer flex self-center text-center justify-center"
                                    onClick={() => addFoodItem(card)}
                                >
                                    Add
                                </button>
                            </div>
                        </div>

                        {/* <div>
                            <img
                                src={
                                    card?.card?.info?.imageId
                                        ? CDN_URL + card?.card?.info?.imageId
                                        : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8"
                                }
                                alt=""
                            />
                        </div>
                        <span >
                            {card?.card?.info?.name}
                        </span> */}
                        {/* <div >
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
                        </div> */}
                        {/* <div>
                            <button onClick={() => addFoodItem(card)}>Add Item</button>
                        </div> */}
                    </div>
                )
            })}
        </div>
    )
}

export default RestaurantMenu;