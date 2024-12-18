import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./Components/Header";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
function App() {
  return (
    <>    <div>
      <Header />
    </div>
    
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      
    </Routes>
    </>

  );
}

export default App;
