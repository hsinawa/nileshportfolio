import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Headers/Navbar';
import TopScreen from './Screens/TopScreen';
import AboutUs from './Screens/AboutUs';
import FindUs from './Screens/FindUs';
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
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
