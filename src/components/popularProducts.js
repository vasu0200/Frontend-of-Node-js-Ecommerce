import React from "react";
import "../styles/popularProducts.css";
import {addToCart, removeFromCart} from "./cartmanagement"
export default function PopularProducts(x){
    return(
        <div id="productsArr">
            {x.products.map(e=>{
                return <div className="productCard">
                    <img className="prodThumb" src={e.thumbnail.main}/>
                    <p className="brand">{e.brand}</p>
                    <p className="name">{e.name}</p>
                    <div className="priceContainer">
                        <p className="price">${e.price}</p>
                        <button className="cartButton" onClick={()=>x.setCart(addToCart(e,x.cart))}>Add</button>
                        <button className="cartButton" onClick={()=>x.setCart(removeFromCart(e,x.cart))}>Remove</button>
                    </div>
                </div>
            })}
        </div>
    )
}