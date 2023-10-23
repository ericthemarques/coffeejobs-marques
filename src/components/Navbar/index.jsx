import React from "react";
import coffee from '../../assets/img/coffee.png'
import Cart from "../Cart/CartWidget"
import '../Navbar/style.css'

function Navbar(){
    return (
        <div className="navbarhead">
            <img className="logo" src={coffee} alt="logo de café" />
            <h2><span>Coffe</span>Jobs</h2>
            <a href=""><h3 className="jobs">Jobs</h3></a>    
            <a href=""><h3>Mensagens</h3></a>
            <a href=""><h3>Perfil</h3></a>
            <Cart/>
        </div>
    )
}


export default Navbar