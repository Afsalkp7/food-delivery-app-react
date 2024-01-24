import React from "react"
import ReactDOM from "react-dom/client"


/**
 * 
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - search
 *  - restuarant containers
 *  - restuarant cards
 * Footer
 *  - links
 *  - address
 *  - contact
 *  - copyright
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src="https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png" />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>Contact us</li>
                    <li>About us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurentCard = (props) => {
    return (
        <div className="res-card" style={{background:"#f0f0f0"}}>
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sz0cb9ubmspaepp4oc8z" />
            <h3>{props.name}</h3>
            <h4>Biriyani</h4>
            <h4>4.5 rating</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="res-container">
                < RestaurentCard name="hello"/>
                < RestaurentCard name="hi"/>
            </div>
        </div>
    )
}
 
const AppLayOut = () => {
    return (
        <div className="App">
            <Header />
            <Body />
            
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayOut />)