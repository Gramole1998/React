import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Text from './component/Text';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter as Router,Routes, Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, ty) => {
    setAlert({
      msg: message,
      type: ty
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#355c84';
      showAlert("dark mode enable ", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enable ", "success");
    }
  }
  return (
    <Router>
      <div className="App">
        <NavBar home="welcome Home" about="know more about us" mode={mode} toggleMode={toggleMode} />
        <div className='container'>
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
            <Route exact path="/" element={<Text showAlert={showAlert} header="Enter box" mode={mode} toggleMod={toggleMode} />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
