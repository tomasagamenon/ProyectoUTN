import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({ isActive }) =>
                    `button ${isActive ? "active" : undefined}`}>Inicio</NavLink></li>
                <li><NavLink to="/products" className={({ isActive }) =>
                    `button ${isActive ? "active" : undefined}`}>Productos</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) =>
                    `button ${isActive ? "active" : undefined}`}>Contactanos</NavLink></li>
                <li><NavLink to="/info" className={({ isActive }) =>
                    `button ${isActive ? "active" : undefined}`}>Nosotros</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;