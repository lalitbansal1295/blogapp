import React from 'react';

import './App.css';
import NavBar from './components/Layout/NavBar';
import HomePage from './components/Pages/HomePage';
import AddBlog from './components/Pages/AddBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import EditBlog from './components/Pages/EditBlog';
import ViewBlog from './components/Pages/ViewBlog';
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
    <div className="App" style={{backgroundColor:"#ffffcc"}}>
      <Router>
        
          <NavBar />
          <Switch>
            <Route exact path="/" component = {HomePage}/>
            <Route exact path="/blog/add" component = {AddBlog}/>
            <Route exact path="/blog/edit/:id" component = {EditBlog}/>
            <Route exact path="/blog/:id" component = {ViewBlog}/>
        </Switch>
      </Router>

    </div>
    </Provider>
  );
}

export default App;
