import './App.css';
import React from 'react';
import { useState, useEffect } from "react"
import axios from "axios";
import List from './components/List';
import Form from './components/Form';

export default function App() {

  const [state, setState] = useState([])

  console.log("state:", state)
  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(res => {
        setState(res.data.results)
      })

  }, [])


  return (
    <div className="App">
      <h1>
        Welcome to Starwars

        <Form
        
          characters = {state}
          setState = {setState}
          // onSubmit = {onSubmit}
        />

        <List 

          characters = {state}
        
        />

      </h1>
    </div>
  );
}


