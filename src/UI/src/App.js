
import './App.css';
import DiceList from './components/DiceList';
import React from 'react';


function App() {

  return (
    <div className="App">
      <h1 className='mainHeading'> Langur Burja</h1>
      <DiceList />
      <pre/>
      <div className='copyRight'> &copy; 2022 - Ram Chapagai</div>
    </div>
  );
}

export default App;
