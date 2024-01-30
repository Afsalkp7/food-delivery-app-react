import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import resData from "../utils/resData";
import Shimmer from "./Shimmer";


const Body = () => {
    const [list,setList] = useState([]) 
    useEffect(async()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0509762&lng=76.0710967&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const obj = await data.json()
        setList(obj?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    },[])

    if (list.length === 0) {
        return <Shimmer />
    }

    return (
        
      <div className="body">
        <div className="filter-btn">
            <button className="most-rated" onClick={()=>{
                const filtered = list.filter((res)=>res.info.avgRatingString > 4)
                setList(filtered)
            }}>most rated</button>
        </div>
        <div className="res-container">
          {list.map((restuarent) => (<RestaurentCard key={restuarent.info.id} resData={restuarent}/>))}
        </div>
      </div>
    );
  };

  export default Body;