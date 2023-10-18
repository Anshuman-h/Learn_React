import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//     "h1",
//     {
//         id: "title",
//         key: "h1",
//     },
//     "Welcome"
// )

// React Component

const HeadComp = () => {
  return (
    <>
      <h1>Namaste First Component</h1>
      <h2>This is h2 to show multiple line example</h2>
    </>
  );
};

// We can skip return as shown below in component
// const HeadComp2 = () =>(
//       <>
//         <h1>Namaste First Component</h1>{" "}
//         <h2>This is h2 to show multiple line example</h2>
//       </>
//     );

// JSX can be used instead of createElement
const heading = (
  <>
    <h1 id="title" key="h1">
      Welcome
    </h1>
    <HeadComp />
  </>
);

/* To use element in Component We use Curly braces */
const HeadComp2 = () => (
  <>
    {heading}
    <h1>Namaste Second Component</h1>
    {HeadComp()}
  </>
//   We can call function in curly braces also bcz at end it is Javascript
);

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title2",
//     key: "h2",
//   },
//   "Helloo"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "div",
//   },
//   [heading, heading2]
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadComp2 />);
