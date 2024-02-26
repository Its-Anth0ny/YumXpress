import { CDN_LINK } from "../utils/constants";

const ResCard = (props) => {
    const {resData} = props;
    return (
        <div className="resCard" >
            <div className="imgContainer">
                <img className="resImg" src={CDN_LINK+resData.info.cloudinaryImageId}/>
            </div>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.avgRating+"⭐"}</h4>
            <h4>{resData.info.sla.deliveryTime+" mins"}</h4>
            <h4>{resData.info.cuisines.join(", ")}</h4>
        </div>
    )
}

export default ResCard;