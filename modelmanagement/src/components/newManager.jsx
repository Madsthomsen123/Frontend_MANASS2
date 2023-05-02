import { useState } from 'react';
import { Navbar } from './Navbar';
import "./css/NewManager.css"

export function NewManager() {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function login() {
    let url = "https://localhost:7181/api/Managers";
    try {
        
    const token = localStorage.getItem('token');
    if(token==null){
        console.log("token is null");
    }
      let response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("success");
      } else {
        alert("Server returned: " + response.statusText);
      }
    } catch (err) {
      alert("Error: " + err);
    }
    return;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    login();
    // Call your login function here
  }



  return (
    <><Navbar /><form className='newManagerForm' onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange} />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange} />
      </label>
      <button className='NewModelSubmitButton' type="submit">Submit</button>
    </form></>
  );
}
