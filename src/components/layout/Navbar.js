import React from 'react';
import PropTypes from 'prop-types'; // for type checking
import { Link } from 'react-router-dom';

// stateful component
// class Navbar extends Component {
//   static defaultProps = {
//     title: 'Github Finder',
//     icon: 'fab fa-github'
//   };
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired
//   };
//   render() {
//     return (
//       <div className='navbar bg-primary'>
//         <h1>
//           <i className={this.props.icon} /> {this.props.title}
//         </h1>
//       </div>
//     );
//   }
// }

// functional component
const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-secondary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
