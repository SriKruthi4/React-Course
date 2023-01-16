import React from "react";
import ReactDOM from "react-dom/client";

//Using React.createElement
// const container=React.createElement(
//     "div",
//     {
//         id:"container",
//     },
//     [React.createElement(
//         "h1",{
//             title:"Heading 1",
//             id:"h1",
//         },
//         "Heading 1"
//     ),React.createElement(
//         "h2",{
//             title:"Heading 2",
//             id:"h2",
//         },
//         "Heading 2"
//     ),React.createElement(
//         "h3",{
//             title:"Heading 2",
//             id:"h3",
//         },
//         "Heading 3"
//     )]
// )
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);



//Using JSX
// const head1=(
//     <h1 id="heading1"> Heading 1 </h1>
// )
// const head2=(
//     <h2 id="heading2"> Heading 2 </h2>
// )
// const head3=(
//     <h3 id="heading1"> Heading 3 </h3>
// )
// const Addon=()=>
// {
//  return (
//  <h4 id="head4">Component Composition</h4>
//  );
// }
// const Container=()=>{
//     return(
//         <div>
//             {head1}
//             {head2}
//             {head3}
//             <Addon/>
//         </div>
//     );
// };
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Container/>);


//Building Header Component
const Searchbar=()=>(
    <input type="text" id="srchbar" placeholder="Search"></input>
)
const HeaderComponent=()=>{
    return (
        <div id="header">
            <img id="logo" src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"></img>
            <Searchbar/>
            <img id="icon"src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"></img>

        </div>
    );
    
}
const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeaderComponent/>);