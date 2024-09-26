
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
