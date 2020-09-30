import React from 'react';

const Footer = () => {
  return (
    <div>
      <head>
        <meta charset='utf-8' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
          integrity='sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z'
          crossorigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.12.0/css/all.css'
        />
      </head>
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
    </div>
  );
};

export default Footer;
