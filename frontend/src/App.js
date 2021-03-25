import logo from './logo.svg';
import './App.css';
import AddPosts from './Components/AddPosts'
import AllPosts from './Components/AllPosts'
import Home from './Components/Home'
import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <h1> GREG's BOILERPLATE </h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/all-posts">All Posts</Link>
        <Link to="/add-posts">Add Posts</Link>
      </nav>

      <Switch>
        <Route exact path="/" render ={ (props) => <Home {...props} /> } />
        <Route exact path="/all-posts" render ={ (props) => <AllPosts {...props} /> } />
        <Route exact path="/add-posts" render ={ (props) => <AddPosts {...props} /> } />
      </Switch>

    </div>
  );
}

export default App;
