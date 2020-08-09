import React from 'react';
import Applayout from "./Applayout";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import {AppProvider} from "./AppProvider";
import './App.css';


function App() {
  return (
    <>
      <Applayout>
        <AppProvider>
          <Navbar />
          <Welcome />
        </AppProvider>
      </Applayout>

    </>
  );
}

export default App;
