import React, { useState, useEffect } from "react";
import userContext from './userContext'
import { BrowserRouter } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'

function App() {
  // const [count, setCount] = useState(0)
  // comment for checking git
  // checking again and again

  return (
    <div className="App">
      <userContext.Provider value={{ user }}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <RoutesList login={login} signUp={signUp} update={update} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  )
}

export default App
