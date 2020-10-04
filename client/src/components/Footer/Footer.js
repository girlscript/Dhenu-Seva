import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer
        className='my-5 pt-5 text-muted text-center text-small'
        style={{ paddingBottom: '50px' }}
      >
        <p className='mb-1 text-light'>&copy; 2020 Dhenu Seva</p>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <a href='/#'>Privacy</a>
          </li>
          <li className='list-inline-item'>
            <a href='/#'>Terms</a>
          </li>
          <li className='list-inline-item'>
            <a href='/#'>Support</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
