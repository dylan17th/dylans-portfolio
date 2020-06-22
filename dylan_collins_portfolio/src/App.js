import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './Components/MainPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/'>
          <MainPage/>
      </Route>
    </div>
  );
}

export default App;
