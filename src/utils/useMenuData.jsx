import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useMenuData = (resMenuId) => {
    const url =
        "https://thingproxy-760k.onrender.com/fetch/" + MENU_API + resMenuId.id;
    const [menuData, setMenuData] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(url);
        const json = await data.json();
        setMenuData(json);
    };

    return menuData;
};

export default useMenuData;
