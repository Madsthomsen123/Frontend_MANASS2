import { useState } from "react";
import "./css/DeleteModel.css";
import { Navbar } from "./Navbar";

export function DeleteModel() {
  const [modelId, setModelId] = useState("");

  async function handleDelete(event) {
    event.preventDefault();
    const url = `https://localhost:7181/api/Models/${modelId}`;

    try {
      const token = localStorage.getItem("token");
      if (token === null) {
        console.log("token is null");
      }

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("success");
      } else {
        alert("Server returned: " + response.statusText);
        console.log(response.statusText);
      }
    } catch (err) {
      alert("Error: " + err);
    }
  }

  function handleInputChange(event) {
    setModelId(event.target.value);
  }

  return (
    <><Navbar />
      <form className="DeleteModelForm" onSubmit={handleDelete}>
        <label>
          Model ID:
          <input
            type="text"
            name="modelId"
            value={modelId}
            onChange={handleInputChange}
          />
        </label>
        <button className="DeleteModelSubmitButton" type="submit">
          Delete
        </button>
      </form>
    </>
  );
}
