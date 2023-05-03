import { NavLink } from "react-router-dom";
import "./css/Navbar.css"


const renderPage = () =>{
    
}

export function Navbar() {
return (
    <nav className="nav_link">
    <NavLink to="/">
        Login    
    </NavLink>
    <NavLink to="/newModel">
        New Model    
    </NavLink>
    <NavLink to="/newManager">
        New Manager    
    </NavLink>
    <NavLink to="/createJob">
        Create Job   
    </NavLink>
    <NavLink to="/jobList">
        Job List    
    </NavLink>
    <NavLink to="/addExpense">
        Add Expense   
    </NavLink>
</nav>
)
}