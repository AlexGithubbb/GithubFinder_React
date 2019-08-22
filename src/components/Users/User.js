import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

// const User = ({ loading, repos, getUser, getUserRepos, user, match }) => {
const User = ({ match }) => {
  // class way of life circle
  // componentDidMount() {
  //   getUser(match.params.login); // getUser(username)
  //   getUserRepos(match.params.login); // getUserRepos(username)
  // }

  const githubContext = useContext(GithubContext);
  const { getUser, user, loading, repos, getUserRepos } = githubContext;
  // useEffect way of life circle
  useEffect(() => {
    getUser(match.params.login); // getUser(username)
    getUserRepos(match.params.login); // getUserRepos(username)
    // eslint-disable-next-line
  }, []); //  keep it [] empty, make useEffect runs only one time(componentDidMount), instead of keep updating

  const {
    name,
    company,
    avatar_url,
    bio,
    location,
    html_url,
    login,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      hireable: {''}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}{' '}
      <div className='grid-2 card'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt='logo'
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-dark my-1'
          >
            Visit Github Profile
          </a>
          <ul>
            {login && (
              <li>
                <Fragment>
                  <strong>Username: {login}</strong>
                </Fragment>
              </li>
            )}
            <li>
              {company && (
                <Fragment>
                  <strong>Company: {company}</strong>
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: {blog}</strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-secondary'>Following: {following}</div>
        <div className='badge badge-success'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

// User.propTypes = {
//   // loading: PropTypes.bool.isRequired,
//   // getUser: PropTypes.func.isRequired,
//   // getUserRepos: PropTypes.func.isRequired,
//   // user: PropTypes.object.isRequired,
//   // repos: PropTypes.array.isRequired
// };
export default User;
