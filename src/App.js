import React from 'react';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import './App.css';
import About from'./components/About';
import Home from './components/Home';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
import Application from './components/Application';

import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import JobProviderLogin from './components/JobProviderLogin';
import JobSeekerLogin from './components/JobSeekerLogin';
import Signup from './components/Signup';
import Login from './components/Login';
import JobProviderSignup from './components/JobProviderSignup'; 
import JobSeekerSignup from './components/JobSeekerSignup';
// const Home = () => {
//   return <h2>Home</h2>;
// };

// const Login = () => {
//    <Login/>; 
// };

// const SignUp = () => {
//   return <h2>Sign Up</h2>;
// };

// const About = () => {
//    <About/>;
// };

const Navigation = () => {
  return (
    <Router>
      <nav>
        
        <h1 className='head'>Part-time Job Scheduling</h1>
        <ul>
          <li><Link to="/" className="aa">Home</Link></li>
          <li><Link to="/login"className="aa">Login</Link></li>
          <li><Link to="/signup"className="aa">Sign Up</Link></li>
          <li><Link to="/about"className="aa">About</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/application-form" component={Application}/>
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} /> */}
        <Route path="/about" component={About} />
        <Route exact path="/" component={JobList} />
          <Route path="/jobs/:id" component={JobDetails} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} /> 
          <Route path="/JobProviderLogin" component={JobProviderLogin} />
          <Route path="/JobSeekerLogin" component={JobSeekerLogin} /> 
          <Route path="/JobProviderSignup" component={JobProviderSignup} />
          <Route path="/JobSeekerSignup" component={JobSeekerSignup} /> 
      </Switch>
    </Router>
  );
};

export default Navigation;
