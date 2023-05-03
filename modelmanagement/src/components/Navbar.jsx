import { NavLink } from "react-router-dom";
import "./css/Navbar.css"


function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}





export function Navbar() {

    const token = localStorage.getItem("token");

    let user = parseJwt(token);
    let isManager = user["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]==="Manager";
    console.log(user);
    console.log(isManager);


if(isManager){
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
    <NavLink to="/addModel">
        Add model   
    </NavLink>
    <NavLink to="/deleteModel">
        Delete Model
    </NavLink>

</nav>
)}
else
return(
    <nav className="nav_link">
    <NavLink to="/">
        Login    
    </NavLink>
    <NavLink to="/jobList">
    Job List   
    </NavLink>
    </nav>

)
}