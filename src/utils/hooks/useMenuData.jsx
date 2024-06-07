import { useEffect, useState } from "react";
import { MENU_API, PROXY_URL } from "../constants";

const useMenuData = (resMenuId) => {
    const url = `${PROXY_URL}${MENU_API}${resMenuId.id}`;
    const [menuData, setMenuData] = useState(null);
    const [res, setRes] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                const menuData = json?.data?.cards;

                const resFinder = menuData.find(
                    (card) =>
                        card.card &&
                        card.card.card &&
                        card.card.card["@type"] ===
                            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
                );

                if (!resFinder) {
                    throw new Error("Restaurant data not found");
                }
                setRes(resFinder.card.card.info);

                const menuFinder = menuData.find(
                    (card) => "groupedCard" in card
                );
                if (!menuFinder) {
                    throw new Error("Menu data not found");
                }

                const menu =
                    menuFinder.groupedCard?.cardGroupMap?.REGULAR?.cards;
                const categories = menu.filter(
                    (c) =>
                        c.card?.card?.["@type"] ===
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                );

                setMenuData(categories);
            } catch (error) {
                console.error("Error fetching menu data:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    return { menuData, res, error, loading };
};

export default useMenuData;
