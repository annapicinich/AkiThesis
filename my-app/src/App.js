import './App.css';
import { Route, Routes } from "react-router-dom";
import Stories from './screens/stories';
import About from './screens/about'
import Research from './screens/research';
import Interactive from './screens/interactive';
import Character from './screens/characterChoice';
import Institutions from './screens/institutions';
import Home from './screens/home';
import School from './screens/school'; // Import School component
import Hospital from './screens/hospital'; // Import Hospital component
import Bank from './screens/bank'; // Import Bank component
import Work from './screens/work'; // Import Work component
import Navbar from './navbar';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <div>
        <Routes>
          <Route path="/stories" element={<Stories />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/interactive" element={<Interactive />} />
          <Route path="/character" element={<Character />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/home" element={<Home />} />
          <Route path="/school" element={<School />} /> {/* Include selectedCharacter parameter */}
          <Route path="/hospital" element={<Hospital />} /> {/* Include selectedCharacter parameter */}
          <Route path="/bank" element={<Bank />} /> {/* Include selectedCharacter parameter */}
          <Route path="/work" element={<Work />} /> {/* Include selectedCharacter parameter */}
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
