import { useParams } from "react-router-dom";
import useMenuData from "../utils/useMenuData";

const ResMenu = () => {
    const resMenuId = useParams();
    console.log(resMenuId);

    const menuData = useMenuData(resMenuId);

    // console.log(resMenuId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resMenuId.resId);
    //     const json = await data.json();
    //     // console.log(json);
    //     setMenuData(json);
    // };

    if (menuData === null) return <h1>Loading...</h1>;

    const { name, costForTwoMessage, avgRating, cuisines } =
        menuData?.data?.cards[0]?.card?.card?.info;

    const { itemCards } =
        menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card;

    // console.log(itemCards);

    return (
        <div className="resMenu">
            <h1>{name}</h1>
            <h3>
                {avgRating + "⭐"}, {costForTwoMessage}
            </h3>
            <h3>{cuisines.join(", ")}</h3>
            <ul>
                {itemCards.map((curr) => (
                    <li key={curr.card.info.id}>
                        {curr.card.info.name + " "}-{" Rs. "}
                        {curr.card.info.price / 100 ||
                            curr.card.info.defaultPrice / 100}
                        ;
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResMenu;
