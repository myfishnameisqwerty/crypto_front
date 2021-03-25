import './App.css';
import Home from './components/Home';
import Login from './components/login'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Graph from './components/Graph';
function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/graph/:id" component={Graph}/>
      </Router>
      
    </div>
  );
}

export default App;
