import { NavLink } from "react-router-dom";
import "./css/Navbar.css"


export function Navbar() {
return (
    <nav className="nav_link">
    <NavLink to="/">
        Home    
    </NavLink>
    <NavLink to="/newModel">
        New Model    
    </NavLink>
</nav>
)
}