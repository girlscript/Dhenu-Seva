import React from 'react';

import Footer from '../layout/Footer';

const correction = {
  marginBottom: 0,
};

const bot = {
  fontSize: '1rem',
  fontWeight: 400,
};

const Register = () => {
  return (
    <div className='authentication-bg'>
      <div className='bg-gradient-primary mainCard'>
        <head>
          <title>Register - DhenuSeva</title>
        </head>
        <div>
          <div className='container' style={correction}>
            <div className='card-body '>
              <div style={{ paddingTop: '50px' }}>
                <div className='text-center'>
                  <h2 className='text-dark mb-4'>Register!</h2>
                </div>
                <form className='user'>
                  <div className='form-group row'>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <div className='text-center'>
                        <input type='radio' name='category' value='doctor' />
                        <label className='text-dark mb-3' for='doctor'>
                          <h4>Doctor</h4>
                        </label>
                      </div>
                    </div>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <div className='text-center'>
                        <input type='radio' name='category' value='farmer' />
                        <label className='text-dark mb-3' for='farmer'>
                          <h4>Farmer</h4>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className='form-group row'>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <input
                        className='form-control form-control-user'
                        type='text'
                        id='exampleFirstName'
                        placeholder='First Name'
                        name='first_name'
                        required
                      />
                    </div>
                    <div className='col-sm-6'>
                      <input
                        className='form-control form-control-user'
                        type='text'
                        id='exampleFirstName'
                        placeholder='Last Name'
                        name='last_name'
                        required
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <input
                      className='form-control form-control-user'
                      type='email'
                      id='exampleInputEmail'
                      aria-describedby='emailHelp'
                      placeholder='Email Address'
                      name='email'
                      required
                    />
                  </div>
                  <div className='form-group row'>
                    <div className='col-sm-6 mb-3 mb-sm-0'>
                      <input
                        className='form-control form-control-user'
                        type='password'
                        id='examplePasswordInput'
                        placeholder='Password'
                        name='password'
                        required
                      />
                    </div>
                    <div className='col-sm-6'>
                      <input
                        className='form-control form-control-user'
                        type='password'
                        id='exampleRepeatPasswordInput'
                        placeholder='Repeat Password'
                        name='password_repeat'
                        required
                      />
                    </div>
                  </div>
                  <a
                    className='btn btn-primary btn-block text-white btn-user'
                    role='button'
                    href='/register'
                  >
                    Register Account
                  </a>
                  <hr />
                  <a
                    className='btn btn-primary btn-block text-white btn-google btn-user'
                    role='button'
                    href='/#'
                  >
                    <i className='fab fa-google'></i>&nbsp; Register with Google
                  </a>
                  <a
                    className='btn btn-primary btn-block text-white btn-facebook btn-user'
                    role='button'
                    href='/#'
                  >
                    <i className='fab fa-facebook-f'></i>&nbsp; Register with
                    Facebook
                  </a>
                  <hr />
                </form>
                <div className='text-center'>
                  <a className='small text-dark bot' href='/#'>
                    Forgot Password?
                  </a>
                </div>
                <div className='text-center'>
                  <a className='small text-dark' href='/login' style={bot}>
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Footer />

          <script
            src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
            integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
            crossorigin='anonymous'
          ></script>
          <script
            src='https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js'
            integrity='sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN'
            crossorigin='anonymous'
          ></script>
          <script
            src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
            integrity='sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV'
            crossorigin='anonymous'
          ></script>
        </div>
      </div>
    </div>
  );
};

export default Register;
