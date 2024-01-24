import logo from './logo.svg';
import './App.css';
import {  Route, Routes,  Router } from "react-router-dom";
import Stories from './screens/stories';
import About from './screens/about'
import Research from './screens/research';
import Interactive from './screens/interactive';
import Navbar from './navbar';
function App() {
  return (
    <>
    <Navbar/>
      <div>
      <Routes>        
        <Route  path="/stories" element={<Stories />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/interactive" element={<Interactive />} />
        </Routes>
        </div>
    </>


  );
}

export default App;
