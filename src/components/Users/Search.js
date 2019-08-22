import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// const  Search = ({setAlert}) =>  {
const Search = () => {
  // state = {
  //   text: ''
  // };

  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      // this.setState({ text: '' });
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <button type='submit' className='btn btn-dark btn-block my-1'>
          <h3>
            <i className='fas fa-search fa-1x' /> Search
          </h3>
        </button>
      </form>
      {/* {showClear && (
          <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
            Clear
          </button>
        )} */}
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          <h3>
            <i className='fas fa-eraser fa-1x' /> Clear
          </h3>
        </button>
      )}
    </div>
  );
};

// add proptypes
//   Search.propTypes = {
//   // clearUsers: PropTypes.func.isRequired,
//   // showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired,
// };
export default Search;
