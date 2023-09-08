import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Headers/Navbar';
import TopScreen from './Screens/TopScreen';
import AboutUs from './Screens/AboutUs';
import FindUs from './Screens/FindUs';
import ContactUs from './Screens/contactUs';
import LastScreenSection from './Screens/LastScreenSection';
function App() {
  return (
    <div className="App">
     <Navbar />
     <br/>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<TopScreen/>} ></Route>
       <Route path='/about' element={<AboutUs/>} ></Route>
       <Route path='/find' element={<FindUs/>} ></Route>
       <Route path='/contact' element={<ContactUs/>} ></Route>
        
      </Routes>
      </BrowserRouter>

      <br/>
      <LastScreenSection />
    </div>
  );
}

export default App;
