import { Navbar } from './Navbar';
import { useState } from 'react';
import "./css/createJob.css"

export function CreateJob(){
    const [customer, setCustomer] = useState("");
    const [startdate, setstartDate] = useState("");
    const [days, setDays] = useState(0);
    const [location, setLocation] = useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = localStorage.getItem('token');
          if (!token) throw new Error("Token not found in localStorage");
      
          const response = await fetch("https://localhost:7181/api/Jobs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              customer,
              startdate,
              days,
              location,
              comments,
            }),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          // Reset form
          setCustomer('');
          setstartDate('');
          setDays(0);
          setLocation('');
          setComments('');
    
          // Show success message
          alert('Job submitted successfully!');
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while submitting the job');
        }
      };

      return (
        <div>
          <Navbar/>
          <form className='createJobForm' onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="customer">Customer:</label>
              <input 
                type="text" 
                id="customer" 
                value={customer} 
                onChange={e => setCustomer(e.target.value)} 
              />
            </div>
      
            <div className="form-group">
              <label htmlFor="startdate">Start Date:</label>
              <input 
                type="date" 
                id="startdate" 
                value={startdate} 
                onChange={e => setstartDate(e.target.value)} 
              />
            </div>
      
            <div className="form-group">
              <label htmlFor="days">Days:</label>
              <input 
                type="number" 
                id="days" 
                min={0}
                max={365}
                value={days} 
                onChange={e => setDays(parseInt(e.target.value))} 
              />
            </div>
      
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input 
                type="text" 
                id="location" 
                value={location} 
                onChange={e => setLocation(e.target.value)} 
              />
            </div>
      
            <div className="form-group">
              <label htmlFor="comments">Comments:</label>
              <textarea 
                id="comments" 
                value={comments} 
                onChange={e => setComments(e.target.value)} 
              />
            </div>
      
            <button className='NewModelSubmitButton' type="submit">Submit</button>
          </form>
        </div>
      );
      
}
