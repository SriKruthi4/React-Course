import { useState } from "react";
const Title=()=>(
    <>
    <img alt="logo" className="logo"src="https://www.boredpanda.com/blog/wp-content/uploads/2015/09/Panda-Food-Art31__880.jpg"></img>
    <h1 id="title">
    FoodPanda
    </h1>
    </>
)
 const HeaderComponent=()=>{
    const[isloggedin,setLoggedIn]=useState(false);
    return(
        <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
                
            </ul>
            
        </div>
        {
        (isloggedin)?<button onClick={()=>{
            setLoggedIn(false);
        }}>Login</button>: <button onClick={()=>{
            setLoggedIn(true);
        }}>Logout</button>
        }
    </div>
    );
}
export default HeaderComponent;