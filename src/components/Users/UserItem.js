import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // state = {
  //   login: 'mojombo',
  //   avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
  //   html_url: 'https://github.com/mojombo'
  // };
  // const {login, avatar_url, html_url} = this.state;
  // const {login, avatar_url, html_url} = this.props.user;
  // const {} = props.user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`User/${login}`} className='btn btn-sm btn-dark my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
