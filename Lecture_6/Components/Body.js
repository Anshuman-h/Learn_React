import { useEffect, useState } from "react";
import { restrauntList } from "../constants";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (searchtxt, restaurant) => {
  const filterest = restaurant.filter((finalrestaurant) =>
    finalrestaurant.info.name.toLowerCase().includes(searchtxt.toLowerCase())
  );
  return filterest;
};

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]); // Empty Restaurants in Starting
  // const [restaurant, setrestaurant] = useState(restaurantList); // Some Restaurants in Starting
  const [searchtxt, setsearchtxt] = useState("");

  useEffect(() => {
    getrestraunt();
  }, []);

  async function getrestraunt() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (filterRestaurant?.length === 0 && allRestaurant.length != 0) {
    return <h1>No Result Found</h1>;
  }

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchBar">
        <input
          type="text"
          className="searchInput"
          placeholder="Type to Search"
          value={searchtxt}
          onChange={(e) => {
            setsearchtxt(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            // Need to filter the data
            const data = filterData(searchtxt, allRestaurant);
            // Update the State - RestaurantData
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="card">
        {filterRestaurant?.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
        {/* <RestrauntCard restraunt = {restrauntList[0]}/> When passing restaurant in place of props */}
        {/* <RestrauntCard {...restrauntList[0]}/>
          <RestrauntCard {...restrauntList[1]}/>
          <RestrauntCard {...restrauntList[2]}/>
          <RestrauntCard {...restrauntList[3]}/> */}
      </div>
    </>
  );
};

export default Body;
