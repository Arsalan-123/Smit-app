import './App.css';
import ResponsiveAppBar from './Components/Navbar/ResponsiveAppBar';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Homepage from './Components/Homepage/Homepage';



function App() {
  return (
    <div className="App">
     <ResponsiveAppBar/>
     <Signup/>
<Login/>
<Homepage/>
    
    </div>
  );
}

export default App;
 