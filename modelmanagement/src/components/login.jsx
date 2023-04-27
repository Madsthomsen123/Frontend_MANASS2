import { useState } from "react";
import "./components.css";
export function ControlledForm() {
    const [email, setEmail] = useState('');
    const [password, Setpassword] = useState('');


    function handleEmail(event) {
        setEmail(event.target.value );
    }
    function handlePassword(event) {
        Setpassword(event.target.value );
    }
    function handleSubmit(event) {
        alert('Login info is: ' + email + ' ' + password);
        event.preventDefault();
    }
return (
    <form className="loginForm" onSubmit={handleSubmit}>
        <label className="emailLabel">
            Email:
        <input type="text" value={email} onChange={handleEmail} />
        </label>
        <label className="passwordLabel">
            Password:
        <input type="text" value={password} onChange={handlePassword} />
        </label>
        <input type="submit" value="Submit" />
    </form>
);
}