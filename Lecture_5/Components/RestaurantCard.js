import { IMG_CDN_URL } from "../constants";

// const RestrauntCard = (props) => { we have to use props.restaurant.image
const RestrauntCard = ({ name, image, cuisins, rating }) => {
  //Object Destructuring
  // const RestrauntCard = ({restaurant}) => {//Object Destructuring
  //We dont want detruct here we want at place of props itself const {name,image,cuisins,rating} = restraunt;//Destructuring restaurant here
  return (
    <div className="item">
      <img
        alt="Image"
        src={
          IMG_CDN_URL + image // restraunt.image
        }
      ></img>
      <h2>{/*restraunt.*/ name}</h2>
      <h5>{cuisins.join(" , ")}</h5>
      <h5>{rating} Stars</h5>
    </div>
  );
};

export default RestrauntCard;