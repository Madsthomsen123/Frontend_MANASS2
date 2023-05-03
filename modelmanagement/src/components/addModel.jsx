import { useState } from "react";
import { Navbar } from './Navbar';
import "./css/addModel.css"

export function AddModelToJobForm() {
  const [jobId, setJobId] = useState("");
  const [modelId, setModelId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://localhost:7181/api/Jobs/${jobId}/model/${modelId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
    });
    const data = await response.json();
    if (response.ok){
      alert("model addded to job succesfully");
      setJobId('');
      setModelId('');
    }
    console.log(data);

  };

  return (
    <><Navbar />
    <form className="AddModelForm" onSubmit={handleSubmit}>
          <label>
              Job ID:
              <input type="text" name="jobId" value={jobId} onChange={(event) => setJobId(event.target.value)} />
          </label>
          <br />
          <label>
              Model ID:
              <input type="text" name="modelId" value={modelId} onChange={(event) => setModelId(event.target.value)} />
          </label>
          <br />
          <button className="AddModelButton" type="submit">Add Model to Job</button>
      </form></>
  );
}
