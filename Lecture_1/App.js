const heading = React.createElement(
    "h1",
    {
        id:"title", 
    },
    "Welcome"
)

const heading2 = React.createElement(
    "h2",
    {
        id:"title2", 
    },
    "Helloo"
)

const container = React.createElement(
    "div",
    {
        id:"div"
    },
    [heading,heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container); 