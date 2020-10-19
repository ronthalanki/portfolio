import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [img, setImg] = useState();

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  useEffect(() => {
    fetch('/api/img').then(data => {
      setImg(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Link className="App-link" to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link className="App-link" to="/page2">Page2</Link>
          </div>
          <Switch>
            <Route exact path="/">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
                </a>
              <p>The current time is {currentTime}.</p>
            </Route>

            <Route path="/page2">
              <p>This is page 2!</p>
            </Route>

            <Route path="/page3">
              <img 
                src={`data:image/jpeg;base64,${img}`} 
                alt="Noise"
              />
            </Route>

          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
