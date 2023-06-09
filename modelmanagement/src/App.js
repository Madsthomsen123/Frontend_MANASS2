import './App.css';
import React from 'react';
import { ControlledForm } from './components/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { CreateJob } from './components/createJob';
import { NewManager } from './components/newManager';
import { NewModel } from './components/newModel.jsx';
import JobList from './components/jobList';
import AddExpense from './components/addExpense';
import {AddModelToJobForm} from './components/addModel';
import { DeleteModel } from './components/DeleteModel';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ControlledForm />} />
          <Route path="/home" element={<Navbar />} />
          <Route path="/createJob" element={<CreateJob/>} />
          <Route path="/newManager" element={< NewManager/>} />
          <Route path="/NewModel" element={<NewModel />} />
          <Route path="/jobList" element={<JobList />} />
          <Route path="/addExpense" element={<AddExpense />} />
          <Route path="/addModel" element={<AddModelToJobForm />} />
          <Route path="/DeleteModel" element={<DeleteModel />} />
        </Routes>
      </Router>
     
    </div>
);
}

export default App;
