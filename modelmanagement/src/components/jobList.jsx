import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import "./css/jobsList.css"

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('https://localhost:7181/api/Jobs', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      setJobs(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      <Navbar/>
      <table className="job-table">
  <thead>
    <tr>
      <th>Customer</th>
      <th>Start Date</th>
      <th>Days</th>
      <th>Location</th>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
    {jobs.map((job) => (
      <tr key={job.id}>
        <td>{job.customer}</td>
        <td>{new Date(job.startDate).toLocaleString()}</td>
        <td>{job.days}</td>
        <td>{job.location}</td>
        <td>{job.comments}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default JobList;
