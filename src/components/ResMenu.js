import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL_1,MENU_URL_2 } from "../utils/constants";


const ResMenu = () => {

    const [menuList , setMenuList] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL_1+id+MENU_URL_2)
        const menu = await data.json()
        setMenuList(menu.data)
    }
    if (menuList === null) {
        return <Shimmer />
    }
    const {name,cuisines} = menuList?.cards[0]?.card?.card?.info
    const menu = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(menu);
       return (
        <div>
            <h1>{name}</h1>
            <h2>{cuisines.join(",")}</h2>
            <h3>Menu</h3>
            <ul>
                {menu.map((item)=><li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>)}
            </ul>
        </div>
    )
}

export default ResMenu;