import React from 'react';
import './App.css';
import Axios from './Axios'
import Header from './Header'
//import Display from './Display'
function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <Axios/>
      {/* <Display/> */}
    </div>
  );
}

export default App;
