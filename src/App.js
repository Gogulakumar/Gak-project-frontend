import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import Login from './Login'
import Get from './Get'
import Form from './Post'
import Delete from './Delete'
import Update from './Update'
import Main from './Main'
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/Main" component={Main}></Route>
      <Route exact path="/Get" component={Get}></Route>
      <Route exact path="/Form" component={Form}></Route>
      <Route exact path="/Update" component={Update}></Route>
      <Route exact path="/Delete" component={Delete}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
