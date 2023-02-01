import {RestaurantList} from "../constants"
import RestaurantCard from "./RestaurantCard"
import { useState,useEffect } from "react";
import Shimmer from "./ShimmerUI";

// function filterData(srchtxt,restaurant)
// {
// return restaurant.filter((res)=> res.data?.name.includes(srchtxt));
// }

function filterData(searchText, restaurants) {
   const filterData = restaurants.filter((restaurant) =>
      restaurant.data?.name.toLowerCase()?.includes(searchText.toLowerCase())
   );
   return filterData;
}

const Body=()=>{
  const [searchtxt,setSearchText]=useState([]);
  const [allrestaurants,setAllRestaurants]=useState([]);
  const [filteredrestaurants,setFilteredRestaurants]=useState(RestaurantList);

  useEffect(()=>{
  getRestaurants();
  },[])
 async function getRestaurants()
 {
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&page_type=DESKTOP_WEB_LISTING");
  const json= await data.json();
  setAllRestaurants(json.data?.cards[2]?.data?.data?.cards);
  setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards);
 }
 if(filteredrestaurants.length==0)
 return <h1>No match Found</h1>
    return allrestaurants?.length==0 ? <Shimmer/> : (
      <>
      <div className="search-container">
      <input type="text" className="srch" placeholder="Search" value={searchtxt} onChange={(e)=>setSearchText(e.target.value)}></input>
      <button className="btn" onClick={()=>{
        
          const data=filterData(searchtxt,allrestaurants);
          setFilteredRestaurants(data);
        }} >
        Search 
      </button>
      </div>
      <div className="rest-list">
        {
          filteredrestaurants.map(res=>{
            return <RestaurantCard {...res.data} key={res.data.id}/>
          })
        }
      </div>
      </>
    );
    };
export default Body;    