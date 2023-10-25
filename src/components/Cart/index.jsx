import React from "react";
import CartImg from "../../assets/img/cart.png"
import "../Cart/style.css"

function CartWidget(){
    return (
            <a className="CartWidget" href=""><img src={CartImg} alt="carrinho" /></a>
    )
}

export default CartWidget;