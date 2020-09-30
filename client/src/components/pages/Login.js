import React from 'react';

import Footer from '../layout/Footer';

import './styles.css';

const Login = () => {
  return (
    <div className='authentication-bg'>
      <div className='bg-gradient-primary'>
        <head>
          <title>Login - DhenuSeva</title>
        </head>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-9 col-lg-12 col-xl-10'>
              <div className='card shadow-lg o-hidden border-0 my-5'>
                <div className='card-body p-0'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='p-5'>
                        <h2 className='text-dark mb-4'>Login!</h2>
                        <div className='text-center'>
                          <h4 className='text-dark mb-4'>Welcome Back!</h4>
                        </div>
                        <form className='user'>
                          <div className='form-group'>
                            <input
                              className='form-control form-control-user'
                              type='email'
                              id='exampleInputEmail'
                              aria-describedby='emailHelp'
                              placeholder='Enter Email Address...'
                              name='email'
                            />
                          </div>
                          <div className='form-group'>
                            <input
                              className='form-control form-control-user'
                              type='password'
                              id='exampleInputPassword'
                              placeholder='Password'
                              name='password'
                            />
                          </div>
                          <div className='form-group'>
                            <div className='custom-control custom-checkbox small'>
                              <div className='form-check'>
                                <input
                                  className='form-check-input custom-control-input'
                                  type='checkbox'
                                  id='formCheck-1'
                                />
                                <label
                                  className='form-check-label custom-control-label'
                                  for='formCheck-1'
                                >
                                  Remember Me
                                </label>
                              </div>
                            </div>
                          </div>
                          <button
                            className='btn btn-primary btn-block text-white btn-user'
                            type='submit'
                          >
                            Login
                          </button>
                          <hr />
                          <a
                            className='btn btn-primary btn-block text-white btn-google btn-user'
                            role='button'
                            href='/#'
                          >
                            <i className='fab fa-google'></i>&nbsp; Login with
                            Google
                          </a>
                          <a
                            className='btn btn-primary btn-block text-white btn-facebook btn-user'
                            role='button'
                            href='/#'
                          >
                            <i className='fab fa-facebook-f'></i>&nbsp; Login
                            with Facebook
                          </a>
                          <hr />
                        </form>
                        <div className='text-center'>
                          <a className='small' href='/#'>
                            Forgot Password?
                          </a>
                        </div>
                        <div className='text-center'>
                          <a className='small' href='/register'>
                            Create an Account!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js'></script>
        <script src='/assets/js/script.min.js?h=b86d882c5039df370319ea6ca19e5689'></script>
      </div>
    </div>
  );
};

export default Login;
