import { useState } from "react";
export function ControlledForm() {
    const initialState = { value: '' };
    const [email, setEmail] = useState(initialState);
    const [password, Setpassword] = useState(initialState);


    function handleEmail(event) {
        setState({ value: event.target.value });
    }
    function handlePassword(event) {
        setState({ value: event.target.value });
    }
    function handleSubmit(event) {
        alert('Login info is: ' + state.value);
        event.preventDefault();
    }
return (
    <form onSubmit={handleSubmit}>
        <label>
            Email:
        <input type="text" value={state.value} onChange={handleEmail} />
        </label>
        <label>
            Password:
        <input type="text" value={state.value} onChange={handlePassword} />
        </label>
        <input type="submit" value="Submit" />
    </form>
);
}