import React from "react";
import CartImg from "../../assets/img/cart.png"
import "../Cart/CartWidget.css"

function CartWidget(){
    return (
            <a className="CartWidget" href=""><img src={CartImg} alt="carrinho" /></a>
    )
}

export default CartWidget;