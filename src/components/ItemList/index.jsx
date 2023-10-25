import React from "react";
import ItemCart from "./itens";
import Data from "../ProductData/Data"

const ItemHome = () => {
    return (
        <>
        <h2 className="text-center mt-3">Todos itens</h2>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {Data.productData.map((item, index) => {
                        return (
                            <ItemCart img={item.img} title={item.title} desc={item.desc} price={item.price} key={index}/>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default ItemHome;