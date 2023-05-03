import { useState } from "react";
import "./css/NewModel.css"
import { Navbar } from "./Navbar";

export function NewModel() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [zip, setZip] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [nationality, setNationality] = useState('');
    const [height, setHeight] = useState(0);
    const [shoeSize, setShoeSize] = useState(0);
    const [hairColor, setHairColor] = useState('');
    const [eyeColor, setEyeColor] = useState('');
    const [comments, setComments] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const token = localStorage.getItem('token');
      
        const formData = {
          firstName,
          lastName,
          email,
          phoneNo,
          addressLine1,
          addressLine2,
          zip,
          city,
          country,
          birthDate,
          nationality,
          height,
          shoeSize,
          hairColor,
          eyeColor,
          comments,
          password
        };
      
        fetch('https://localhost:7181/api/models', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      };
    
    return (
      <><Navbar /><form className="NewModelForm" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
        </label>
        <label>
          Address Line 1:
          <input type="text" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} />
        </label>
        <label>
          Address Line 2:
          <input type="text" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />
        </label>
        <label>
          Zip:
          <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
        </label>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <label>
          Country:
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>
        <label>
          Birth Date:
          <input type="datetime-local" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
        </label>
        <label>
          Nationality:
          <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
        </label>
        <label>
          Height:
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Shoe Size:
          <input type="number" value={shoeSize} onChange={(e) => setShoeSize(e.target.value)} />
        </label>
        <label>
          Hair Color:
          <input type="text" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />
        </label>
        <label>
          Eye Color:
          <input type="text" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} />
        </label>
        <label>
          Comments:
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className="NewModelSubmitButton" type="submit">Submit</button>
      </form></>
    )
}
