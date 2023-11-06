import { useEffect, useState } from "react";
import { restrauntList } from "../constants";
import RestrauntCard from "./RestaurantCard";

const filterData = (searchtxt, restaurant) => {
  const filterest = restaurant.filter((finalrestaurant) =>
    finalrestaurant.name.toLowerCase().includes(searchtxt.toLowerCase())
  );
  return filterest;
};

const Body = () => {
  const [restaurant, setrestaurant] = useState(restrauntList);
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
    setrestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
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
            const data = filterData(searchtxt, restaurant);
            // Update the State - RestaurantData
            setrestaurant(data);
          }}
        >
          Search - {searchtxt}
        </button>
      </div>
      <div className="card">
        {restaurant.map((restaurant, j) => {
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
