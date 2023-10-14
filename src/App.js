import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./pages/home/Home"
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <Home/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));