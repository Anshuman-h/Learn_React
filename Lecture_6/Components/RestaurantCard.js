import { IMG_CDN_URL } from "../constants";
import "./RestaaurantCard.css"
// const RestrauntCard = (props) => { we have to use props.restaurant.image
const RestrauntCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  //Object Destructuring
  // const RestrauntCard = ({restaurant}) => {//Object Destructuring
  //We dont want detruct here we want at place of props itself const {name,image,cuisins,rating} = restraunt;//Destructuring restaurant here
  return (
    <div className="item">
      <img
        className="image"
        alt="Image"
        src={
          IMG_CDN_URL + cloudinaryImageId // restraunt.image
        }
      ></img>
      <h2>{/*restraunt.*/ name}</h2>
      <h5>{cuisines.join(" , ")}</h5>
      <h5>{avgRating} Stars</h5>
    </div>
  );
};

export default RestrauntCard;
