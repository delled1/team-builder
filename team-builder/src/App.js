import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Forms from "./components/forms"
import Form from "./components/form"


function App() {
  

  const [teamMember, setTeamMember] = useState([{}])

  const addNewMember = (member) => {
    const newMember = {
      id: Date.now(),
      title: member.title,
      name: member.name,
      about: member.about
    };

    setTeamMember([newMember,...teamMember])
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Forms addNewMember={addNewMember}/>
      <Form teamMember={teamMember} key={teamMember.id}/>
    </div>
  );
}

export default App;
