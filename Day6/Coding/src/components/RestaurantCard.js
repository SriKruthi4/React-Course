import { IMG_CDN_URL } from "../constants";
const RestaurantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{
    
    return(
        
     <div className="card">
     <img className="cimg"src={IMG_CDN_URL+cloudinaryImageId}></img>
     <h3>{name}</h3>
     <h4 className="cuisines" >{cuisines.join(", ")}</h4>
     <h4 className="rating">{avgRating} Stars</h4>
     </div>
    );
}
export default RestaurantCard;