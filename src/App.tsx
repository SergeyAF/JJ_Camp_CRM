import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import Page404 from "./Pages/404Page";
import routes from "./routes";


function App() {
  // const match = useRouteMatch(routes)
  return (
    <div className="app">
      <Router>
        <Header className="header"/>
        <NavBar className="navBoard"/>
        <div className="content">
          <Switch>
            {routes.map(el=><Route key={el.path} path={el.path} render={el.render} />)}
            <Route exact path='/' render={() => <HomePage/>}/>
            <Route render={() => <Page404/>}/>
          </Switch>
        </div>
        <Footer className="footer"/>
      </Router>
    </div>
  );
}

export default App;