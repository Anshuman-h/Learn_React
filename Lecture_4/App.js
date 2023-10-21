import React from "react";
import ReactDOM from "react-dom/client";

const Head = () => {
  return (
    <>
      <div className="head">
        <a href="/">
          <h1>Food Villa</h1>
        </a>
        <div className="head_li">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const restrauntList = [
  {
    id:1,
    name: "Burger King",
    image: "cd832b6167eb9f88aeb1ccdebf38d942",
    cuisins: ["American", "Desserts"],
    rating: "4.2",
  },
  {
    id:2,
    name: "Wendy,s",
    image: "f1aa621021a2826088089b89842d4e7c",
    cuisins: ["Burger", "Fast Food"],
    rating: "4.3",
  },
  {
    id:3,
    name: "Big Bowl",
    image: "c99751d54e4e1847186c62b3309c1327",
    cuisins: ["North Indian", "Chinese"],
    rating: "4.2",
  },
  {
    id:4,
    name: "Pizza Hut",
    image: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    cuisins: ["Pizza"],
    rating: "4.6",
  },
];

// const RestrauntCard = (props) => { we have to use props.restaurant.image
const RestrauntCard = ({name,image,cuisins,rating}) => {//Object Destructuring
// const RestrauntCard = ({restaurant}) => {//Object Destructuring
  //We dont want detruct here we want at place of props itself const {name,image,cuisins,rating} = restraunt;//Destructuring restaurant here
  return (
    <div className="item">
      <img
        alt="Image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
           image// restraunt.image 
        }
      ></img>
      <h2>{/*restraunt.*/name}</h2>
      <h5>{cuisins.join(" , ")}</h5>
      <h5>{rating} Stars</h5>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="card">
      {
        restrauntList.map((restaurant,j) =>{
          return <RestrauntCard {...restaurant} key ={restaurant.id}/>
        })
      }
        {/* <RestrauntCard restraunt = {restrauntList[0]}/> When passing restaurant in place of props */}
        {/* <RestrauntCard {...restrauntList[0]}/>
        <RestrauntCard {...restrauntList[1]}/>
        <RestrauntCard {...restrauntList[2]}/>
        <RestrauntCard {...restrauntList[3]}/> */}
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <h3>Footer</h3>
    </>
  );
};

const Screen = () => {
  return (
    <>
      <Head />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Screen />);
