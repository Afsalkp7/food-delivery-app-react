import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {

    const {id} = useParams()
    const menuList = useResMenu(id)
   
    if (menuList === null) {
        return <Shimmer />
    }
    const {name,cuisines} = menuList?.cards[0]?.card?.card?.info
    const menu = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(menu);
       return (
        <div>
            <span className="font-bold text-2xl flex justify-center">{name}</span>
            <h2  className="font-bold text-lg flex justify-center">{cuisines.join(",")}</h2>
            <h3  className="font-bold text-md flex justify-center">Menu</h3>
            <ul >
                {menu.map((item)=><li  className=" flex justify-center" key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price || item?.card?.info?.variantsV2.variantGroups[0].variations[0].price}</li>)}
            </ul>
        </div>
    )
}

export default ResMenu;