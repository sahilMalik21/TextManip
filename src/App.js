import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);

    },1500);
  }
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#072d52de';
      showAlert("Dark mode is Enabled",'success');
      // document.title='TextUtils-DarkMode';
      // setInterval(() => {
      //   document.title='TextUtils-Update this Please';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is Enabled",'danger');
      // document.title='TextUtils-LightMode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextManip" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <Textform heading="Enter the text to Analyse" mode={mode} showAlert={showAlert}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
