import './App.css';
import { Switch, BrowserRouter , Route, Link } from "react-router-dom";
import Login from './Components/Login';
import Error404 from './Components/Error404';
import Home from './Components/Home';



function App() {
  return (
    <BrowserRouter>
      <nav>
           <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
      </nav>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="*" component={Error404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
