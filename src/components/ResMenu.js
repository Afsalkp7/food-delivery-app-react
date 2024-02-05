import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {

    const {id} = useParams()
    const menuList = useResMenu(id)
   
    if (menuList === null) {
        return <Shimmer />
    }
    const {name,cuisines} = menuList?.cards[0]?.card?.card?.info
    const menu = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
       return (
        <div>
            <span className="font-bold text-2xl flex justify-center">{name}</span>
            <h2  className="font-bold text-lg flex justify-center">{cuisines.join(",")}</h2>
            {menu.map((category)=><ResCategory key={category?.card?.card?.title} data={category?.card?.card}/>)}
        </div>
    )
}

export default ResMenu;