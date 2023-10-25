import React from "react";
import { useCart } from "react-use-cart"


const ItemCart = (props) => {
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src="" class="card-img-top img-fluid" alt=""/>
                    <div div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <h5 class="card-text">${props.price}</h5>
                        <p class="card-text">{props.desc}</p>
                        <button href="#" class="btn btn-sucess">Adicionar</button>
                    </div>
            </div>
        </div>
    )
}

export default ItemCart;