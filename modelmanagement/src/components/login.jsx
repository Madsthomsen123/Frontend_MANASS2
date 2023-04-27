import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="text" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
