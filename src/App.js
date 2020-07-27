import React from 'react';
import './assets/css/argon.min.css';
import './assets/css/style2.css';

import Navbar from './components/Navbar/Navbar';
import Main from './pages/main';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
