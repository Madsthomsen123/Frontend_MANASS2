import { useState } from "react";
import "./css/components.css";
import { useNavigate } from "react-router-dom";

export function ControlledForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  async function login() {
    let url = "https://localhost:7181/api/account/login";
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      });
      if (response.ok) {
        let token = await response.json();
        localStorage.setItem("token", token.jwt);
        console.log("success");
        navigate("/home");
      } else {
        alert("Server returned: " + response.statusText);
      }
    } catch (err) {
      alert("Error: " + err);
    }
    return;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    login();
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <label className="emailLabel">
        Email:
        <input className="emailInput" type="text" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label className="passwordLabel" >
        Password:
        <input className="passwordInput" type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <input className="submitButton" type="submit" value="Submit" />
    </form>
  );
}
