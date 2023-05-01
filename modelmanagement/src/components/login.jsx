import { useState } from "react";
import "./components.css"

export function ControlledForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    alert('Login info is: ' + formData.email + ' ' + formData.password);
    event.preventDefault();
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <label className="emailLabel">
        Email:
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label className="passwordLabel" >
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <input className="submitButton" type="submit" value="Submit" />
    </form>
  );
}
