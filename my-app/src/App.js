import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './screens/about';
import Research from './screens/research';
import Interactive from './screens/interactive';
import Character from './screens/characterChoice';
import Institutions from './screens/institutions';
import HomeL from './screens/homeL';
import HomeM from './screens/homeM';
import HomeH from './screens/homeH';
import PrivateSchool from './screens/privateSchool';
import PublicSchool from './screens/publicSchool';
import CharterSchool from './screens/charterSchool';
import Hospital from './screens/hospital';
import Bank from './screens/bank';
import Work from './screens/work';
import Navbar from './navbar';

function App() {
  return (
   
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/interactive" element={<Interactive />} />
            <Route path="/character" element={<Character />} />
            <Route path="/institutions" element={<Institutions />} />
            <Route path="/homeL" element={<HomeL />} />
            <Route path="/homeM" element={<HomeM />} />
            <Route path="/homeH" element={<HomeH />} />
            <Route path="/privateSchool" element={<PrivateSchool />} />
            <Route path="/charterSchool" element={<CharterSchool />} />
            <Route path="/publicSchool" element={<PublicSchool />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/bank" element={<Bank />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
