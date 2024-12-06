import { NavLink } from "react-router-dom";
const Product = ({name, img, description, direction}) => {
    return (
        <div>
            <h3>{name}</h3>
            <ul>
                <li><NavLink to='/error' className={`container`} state={{name, img, description}}><img src={img} alt={name}/></NavLink></li>
                <li><p>{description}</p></li>
                <NavLink to='/error' className={`button`} state={{name, img, description}}>Comprar</NavLink>
            </ul>
        </div>
    )
}

export default Product;