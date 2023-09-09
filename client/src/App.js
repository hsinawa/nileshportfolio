import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Headers/Navbar';
import TopScreen from './Screens/TopScreen';
import AboutUs from './Screens/AboutUs';
import FindUs from './Screens/FindUs';
import ContactUs from './Screens/contactUs';
import LastScreenSection from './Screens/LastScreenSection';
import AboutDeveloper from './Components/DeveloperDetails';
import SuccessPage from './Components/successScreen';
import ErrorPage from './Screens/errorPage';
import BookTrialClasses from './Screens/bookTrials';
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
       <Route path='/developer' element={<AboutDeveloper/>} ></Route>
       <Route path='/book' element={<BookTrialClasses/>} ></Route>
       <Route path='/success' element={<SuccessPage/>} ></Route>
       <Route path='/error' element={<ErrorPage/>} ></Route>
        
      </Routes>
      </BrowserRouter>

      <br/>
      <LastScreenSection />
    </div>
  );
}

export default App;
