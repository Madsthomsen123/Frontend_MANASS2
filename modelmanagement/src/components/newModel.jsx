import { useState } from "react";
import "./css/NewModel.css"
import { Navbar } from "./Navbar";


export function NewModel() {

  
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    addresLine1: '',
    addresLine2: '',
    zip: '',
    city: '',
    country: '',
    birthDate: '',
    nationality: '',
    height: 0,
    shoeSize: 0,
    hairColor: '',
    eyeColor: '',
    comments: '',
    password: ''
  };

  const [formData, setFormData] = useState(initialState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    login(formData);   
  }

  async function login(formData) {
    const url = "https://localhost:7181/api/Models";
    try {
      const token = localStorage.getItem('token');
      if (token === null) {
        console.log("token is null");
      }
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("New Model added")
        setFormData(initialState);
      } else {
        alert("Server returned: " + response.statusText);
        console.log(response.statusText);
      }
    } catch (err) {
      alert("Error: " + err);
    }
  }
  
  
    
    return (
      <><Navbar /><form className="NewModelForm" onSubmit={handleSubmit}>
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
          Phone Number:
          <input 
          type="tel" 
          name="phoneNo"
          value={formData.phoneNo} 
          onChange={handleInputChange} />
        </label>
        <label>
          Address Line 1:
          <input 
          type="text" 
          name="addresLine1"
          value={formData.addresLine1} 
          onChange={handleInputChange}/>
        </label>
        <label>
          Address Line 2:
          <input 
          type="text" 
          name="addresLine2"
          value={formData.addresLine2} 
          onChange={handleInputChange} />
        </label>
        <label>
          Zip:
          <input 
          type="text" 
          name="zip"
          value={formData.zip} 
          onChange={handleInputChange} />
        </label>
        <label>
          City:
          <input 
          type="text" 
          name="city"
          value={formData.city} 
          onChange={handleInputChange} />
        </label>
        <label>
          Country:
          <input 
          type="text" 
          name="country"
          value={formData.country} 
          onChange={handleInputChange} />
        </label>
        <label>
          Birth Date:
          <input 
          type="datetime-local" 
          name="birthDate"
          value={formData.birthDate}
          onChange={handleInputChange}  />
        </label>
        <label>
          Nationality:
          <input 
          type="text"
          name="nationality" 
          value={formData.nationality} 
          onChange={handleInputChange} />
        </label>
        <label>
          Height:
          <input 
          type="number"
          name="height"
          value={formData.height} 
          onChange={handleInputChange} />
        </label>
        <label>
          Shoe Size:
          <input 
          type="number" 
          name="shoeSize"
          value={formData.shoeSize} 
          onChange={handleInputChange} />
        </label>
        <label>
          Hair Color:
          <input 
          type="text" 
          name="hairColor"
          value={formData.hairColor} 
          onChange={handleInputChange} />
        </label>
        <label>
          Eye Color:
          <input 
          type="text" 
          name="eyeColor"
          value={formData.eyeColor} 
          onChange={handleInputChange} />
        </label>
        <label>
          Comments:
          <textarea
          type="text"
          name="comments"
          value={formData.comments} 
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
        <button className="NewModelSubmitButton" type="submit">Submit</button>
      </form></>
    )
}
