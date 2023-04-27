import { useState } from "react";
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
    <form onSubmit={handleSubmit}>
        <label>
            Email:
        <input type="text" value={email} onChange={handleEmail} />
        </label>
        <label>
            Password:
        <input type="text" value={password} onChange={handlePassword} />
        </label>
        <input type="submit" value="Submit" />
    </form>
);
}