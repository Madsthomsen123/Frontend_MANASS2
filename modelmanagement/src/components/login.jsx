import { useState } from "react";
export function ControlledForm() {
    const initialState = { value: '' };
    const [email, setEmail] = useState(initialState);
    const [password, Setpassword] = useState(initialState);


    function handleEmail(event) {
        setEmail({ value: event.target.value });
    }
    function handlePassword(event) {
        Setpassword({ value: event.target.value });
    }
    function handleSubmit(event) {
        alert('Login info is: ' + email.value + password.value);
        event.preventDefault();
    }
return (
    <form onSubmit={handleSubmit}>
        <label>
            Email:
        <input type="text" value={email.value} onChange={handleEmail} />
        </label>
        <label>
            Password:
        <input type="text" value={password.value} onChange={handlePassword} />
        </label>
        <input type="submit" value="Submit" />
    </form>
);
}