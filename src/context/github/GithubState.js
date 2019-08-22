import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING
} from '../types';

let githubClientId,
githubClientSecret;


if(process.env.NODE_ENV !== 'production'){
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search User
  // search github users
  const searchUsers = async text => {
    setLoading();
    // console.log(text);
    const res = await axios.get(
      // https://api.github.com/search/users?q=brad
      `https://api.github.com/search/users?q=${text}&client_id=${
        githubClientId
      }&client_secret=${githubClientSecret}`
    );
    // console.log(res.data);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  };

  // Get User
  const getUser = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${
      githubClientId
      }&client_secret=${githubClientSecret}`
    );
    // this.setState({ user: res.data, loading: false });
    dispatch({
      type: GET_USER,
      payload: res.data
    })
    // setLoading(false);
  };

  // Get Repsos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:acs&client_id=${
      githubClientId
      }&client_secret=${githubClientSecret}`
    );
    // this.setState({ repos: res.data, loading: false });
    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
    // setLoading(false);
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  //   setUsers([]);
  //   setLoading(false);
  // };

  // set loading
  const setLoading = () => dispatch({type: SET_LOADING});

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
