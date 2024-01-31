import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import resData from "../utils/resData";
import Shimmer from "./Shimmer";


const Body = () => {
    const [list,setList] = useState([]) 
    const [filteredList,setFilteredList] = useState([])
    const [searchText , setSearchText] = useState("")

    useEffect(async function(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2469918&lng=75.7855555&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const obj = await data.json()
        setList(obj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(obj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    },[])

    if (list.length === 0) {
        return <Shimmer />
    }

    return (
        
      <div className="body">
        <div className="filter-btn">
            <div className="search-div">
                <input className="search-input" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button className="search-btn" onClick={()=>{
                    const filtered = list.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredList(filtered)
                }}>Search</button>
            </div>
            <button className="most-rated" onClick={()=>{
                const filtered = list.filter((res)=>res.info.avgRatingString > 4)
                setFilteredList(filtered)
            }}>most rated</button>
        </div>
        <div className="res-container">
          {filteredList.map((restuarent) => (<RestaurentCard key={restuarent.info.id} resData={restuarent}/>))}
        </div>
      </div>
    );
  };

  export default Body;