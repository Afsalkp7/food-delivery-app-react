import { useEffect, useState } from "react";
import { MENU_URL_1,MENU_URL_2 } from "../utils/constants";

const useResMenu = (id) => {
     const [menuList , setMenuList] = useState(null)
    useEffect(()=>{
        fetchMenu()
    },[])
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL_1+id+MENU_URL_2)
        const menu = await data.json()
        setMenuList(menu.data)
    }
    return menuList;
}

export default useResMenu;