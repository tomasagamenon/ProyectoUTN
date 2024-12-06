import React from "react";
import { NavLink } from "react-router-dom";
const ProductItem = (props) => {
    const { name, img, description, price } = props;
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                <li><NavLink to='/error' state={{name, img, description}}><img className="imageProduct" src={img} alt={name}/></NavLink></li>
                <li><p>{description}</p></li>
                <NavLink to='/error' className={`button`} state={{name, img, description}}>Comprar</NavLink>
            </ul>
        </div>
    )
}

export default ProductItem;