import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useMenuData = (resMenuId) => {
    const [menuData, setMenuData] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resMenuId.id);
        const json = await data.json();
        setMenuData(json);
    };

    return menuData;
};

export default useMenuData;
