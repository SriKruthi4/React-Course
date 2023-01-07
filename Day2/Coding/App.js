import React from "react";
import ReactDOM from "react-dom/client";
const h1=React.createElement(
    "h1",{
        title:"Heading 1",
        id:"h1",
    },
    "Heading 1"
)
const h2=React.createElement(
    "h2",{
        title:"Heading 1",
        id:"h2",
    },
    "Heading 2"
)
const container=React.createElement(
    "div",
    {
        id:"container",
    },
    [h1,h2]
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);