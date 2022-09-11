import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import NavBar from './Components/NavigateBar/index'
import Home from './Pages/Home/index';
import Login from './Pages/Login/index';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element= {<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
