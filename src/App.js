// import React, { Fragment, useState } from 'react';
import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import User from './components/Users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
// import axios from 'axios';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null,
  // };
  // foo = () => 'fooMethod'; // foo is a method of App
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

  //   // did sth when component is mount
  // this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }
  // state = {
  //   users: [
  //     axios.get('')
  //   ]
  // }

  // // search github users
  // const searchUsers = async text => {
  //   setLoading(true);
  //   // console.log(text);
  //   const res = await axios.get(
  //     // https://api.github.com/search/users?q=brad
  //     `https://api.github.com/search/users?q=${text}&client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(res.data);
  //   setUsers(res.data.items);
  //   setLoading(false);
  // };

  // Get single github user
  // const getUser = async username => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // this.setState({ user: res.data, loading: false });
  //   setUser(res.data);
  //   setLoading(false);
  // };

  // Get userRepos
  // const getUserRepos = async username => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:acs&client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // this.setState({ repos: res.data, loading: false });
  //   setRepos(res.data);
  //   setLoading(false);
  // };

  // clear users
  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  // };

  // show alert
  // const showAlert = (msg, type) => {
  //   setAlert({ msg, type });
  //   // console.log(this); // App object
  //   setTimeout(() => {
  //     // console.log(this); // window object
  //     setAlert(null);
  //   }, 2000);
  // };

  // const name = 'Bowei Yao';
  // const foo = () => 'fooFunc';
  // const loading = false;
  // const showName = true;

  // return (
  //   // <Fragment ></Fragment> replace <div>, can also use<></> but not recommend coz it may cause error
  //   <div className='App'>
  //     <h1>Hello {name.toUpperCase()}</h1>
  //     {loading ? ('loading...') : <h1>{showName && name}</h1>}
  //     <h3>Hello {this.foo()}</h3>
  //     <h3>Hello {foo()}</h3>
  //     {/* <label htmlFor="name">name</label> */}
  //     {/* <h2>Hello {name}</h2> */}
  //   </div>
  // );
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  // render={props => (
                  //   <Fragment>
                  //     <Search
                  //     // clearUsers={clearUsers}
                  //     // showClear={users.length > 0 ? true : false}
                  //     // setAlert={showAlert}
                  //     />
                  //     {/* <Users users={users} loading={loading} /> */}
                  //     {/* no need to pass props from here anymore */}
                  //     <Users />
                  //   </Fragment>
                  // )}
                  component={Home}
                />
                <Route exact path='/about' component={About} />
                <Route
                  exact
                  path='/user/:login'
                  component={User}
                  // render={props => (
                  //   <User
                  //     // {...props}
                  //     // getUser={getUser}
                  //     // getUserRepos={getUserRepos}
                  //     // repos={repos}
                  //     // user={user}
                  //     // loading={loading}
                  //   />
                  // )}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
