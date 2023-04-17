import { NavLink } from "react-router-dom";
import './navbar.css';


export const Navbar = () => {

    return (
        <nav className="nav">
            <div className="navbar-links">
                <NavLink
                    className={"navbar-link"}
                    to={"/"}
                >
                    Inicio
                </NavLink>
                <NavLink
                    className={"navbar-link"}
                    to={"about"}
                >
                    Sobre mi
                </NavLink>
                <NavLink
                    className={"navbar-link"}
                    to={"technologies"}
                >
                    Tecnologías
                </NavLink>
                <NavLink
                    className={"navbar-link"}
                    to={"/projects"}
                >
                    Proyectos
                </NavLink>
                <NavLink

                    className={"navbar-link"}
                    to={"/contact"}
                >
                    Contacto
                </NavLink>
            </div>
        </nav>
    )
}
