import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import "./css/addExpense.css"

const AddExpense = () => {
  const [jobId, setJobId] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const decodeToken = () =>{
    const t = localStorage.getItem('token');
    let user = parseJwt(t);
    return user.ModelId;
  }

  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = {
        JobId: jobId,
        ModelId: decodeToken(),
        Text: expenseType,
        Amount: amount,
        Date: date
      }; 
      const response = await axios.post(
        "https://localhost:7181/api/Expenses",
        data,
        config
      );console.log(response);
      if (response.status===201) {
        setJobId("");
        setExpenseType("");
        setAmount("");
        setDate("");
        setErrorMessage("");
        alert("Expense added successfully");
      }
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div>
        <Navbar/>
      <h2>Add Expense</h2>
      {errorMessage && <div>{errorMessage.toString()}</div>}
      <form className="addExpenseForm" onSubmit={handleSubmit}>
        <label htmlFor="jobId">Job Id:</label>
        <input
          type="text"
          id="jobId"
          value={jobId}
          onChange={(e) => setJobId(e.target.value)}
        />


        <label htmlFor="expenseType">Expense Type:</label>
        <input
          type="text"
          id="expenseType"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          min={0}
          max={1000000}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="datetime-local"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button className="NewModelSubmitButton" type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
