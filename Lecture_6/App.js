import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./Components/Head";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const Screen = () => {
  return (
    <>
    {/* <h1>test</h1> */}
      <Head />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Screen />);
