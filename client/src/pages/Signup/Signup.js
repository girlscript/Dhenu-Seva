import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import FeedbackModal from '../../util/FeedbackModal';
import FeedbackAlert from '../../util/FeedbackAlert';
import { validateEmptyFields, validateInput, validateForm } from '../../util/Validation.js';
import './Signup.css'

export default class Signup extends Component {
  state = {
    category: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_repeat: '',
    isOpen: false,
    check: true,
    errors: {
      category: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_repeat: '',
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let errors = this.state.errors;
    errors = validateInput(name, value, errors);
    this.setState({ errors, [name]: value });
  }

  handleSubmit = (e) => {
    const { history } = this.props;
    e.preventDefault();
    let errors = this.state.errors;
    errors = validateEmptyFields(this.state, errors);
    this.setState({ errors });
    this.setState({ isOpen: true });
    fetch("http://localhost:8080/auth/signup", {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        //category: this.state.category,
        name: this.state.first_name,
        //last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        //password_repeat: this.state.password_repeat
      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          this.setState({ check: false })
        } else {
          history.push('/login')
        }
      }).catch(err => {
        console.log(err)
      })
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  FormSubmissionModal = () => {
    if (this.state.password !== this.state.password_repeat) {
      return (
        <FeedbackModal isOpen={this.state.isOpen} onClose={this.toggleModal}>
          Passwords do not match!
        </FeedbackModal>
      );
    }
    if (validateForm(this.state.errors) && (this.state.check === true)) {
      return (
        <FeedbackModal isOpen={this.state.isOpen} onClose={this.toggleModal}>
          Form submitted successfully!
        </FeedbackModal>
      );
    }
    else {
      return (
        <FeedbackModal isOpen={this.state.isOpen} onClose={this.toggleModal}>
          Error in form Submission.Please check all the fields!
        </FeedbackModal>
      );
    }
  };

  render() {
    return (
      <div className='authentication-bg' style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/images/authentication-background.jpg')` }}>
        <div className="container">
          <div className="card-body ">
            <div className="text-center">
              <h2 className="text-dark mb-4">
                Register!
          </h2>
            </div>
            <this.FormSubmissionModal />
            <form className="user">
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="text-center">
                    <input type="radio" name="category" value="doctor" onChange={(e) => this.handleChange(e)} />
                    <label className="text-dark mb-3" htmlFor="doctor">
                      <h4>Doctor</h4>
                    </label>
                  </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="text-center">
                    <input type="radio" name="category" value="farmer" onChange={(e) => this.handleChange(e)} />
                    <label className="text-dark mb-3" htmlFor="farmer">
                      <h4>Farmer</h4>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="First Name" name="first_name" onChange={(e) => this.handleChange(e)} required />{this.state.errors.first_name && (
                  <FeedbackAlert
                    variant='warning'
                    message={this.state.errors.first_name}
                  />
                )}</div>
                <div className="col-sm-6"><input className="form-control form-control-user" type="text" id="exampleLastName" placeholder="Last Name" name="last_name" onChange={(e) => this.handleChange(e)} required />{this.state.errors.last_name && (
                  <FeedbackAlert
                    variant='warning'
                    message={this.state.errors.last_name}
                  />
                )}</div>
              </div>
              <div className="form-group"><input className="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Email Address" name="email" onChange={(e) => this.handleChange(e)} required />{this.state.errors.email && (
                <FeedbackAlert
                  variant='warning'
                  message={this.state.errors.email}
                />
              )}</div>
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" onChange={(e) => this.handleChange(e)} required />{this.state.errors.password && (
                  <FeedbackAlert
                    variant='warning'
                    message={this.state.errors.password}
                  />
                )}</div>
                <div className="col-sm-6"><input className="form-control form-control-user" type="password" id="exampleRepeatPasswordInput" placeholder="Repeat Password" name="password_repeat" onChange={(e) => this.handleChange(e)} required />{this.state.errors.password_repeat && (
                  <FeedbackAlert
                    variant='warning'
                    message={this.state.errors.password_repeat}
                  />
                )}</div>
              </div>
              <Link className="btn btn-primary btn-block text-white btn-user" role="button" onClick={this.handleSubmit} >Register Account</Link>
              <hr></hr>
              <Link className="btn btn-primary btn-block text-white btn-google btn-user" role="button"><i className="fab fa-google"></i>&nbsp; Register with Google</Link><Link className="btn btn-primary btn-block text-white btn-facebook btn-user" role="button"><i
                className="fab fa-facebook-f"></i>&nbsp; Register with Facebook</Link>
              <hr></hr>
            </form>
            <div className="text-center"><Link className="small text-dark bot" to="/forgot-password">Forgot Password?</Link></div>
            <div className="text-center"><Link className="small text-dark bot" to="/login">Already have an account? Login!</Link></div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
