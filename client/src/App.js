import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Headers/Navbar';
import TopScreen from './Screens/TopScreen';
function App() {
  return (
    <div className="App">
     <Navbar />
     <br/>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<TopScreen/>} ></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
