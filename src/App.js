import React from 'react';
import './styles/App.scss';
import Login from "./views/login/Login";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <a href={'/'}>Test task for Syntech</a>
        </div>
      </header>
      <div className="main">
        <div className="container">
          <Login/>
        </div>
      </div>
      <footer>
        <div className="container">
          <p>Best regards :)</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
