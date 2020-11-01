import React, { Component } from 'react'
import './HomePage.css'
import Doctor_Card from '../../components/Doctor_Card/Doctor_Card';
import { connect } from 'react-redux';
import { logout_user } from '../../redux/user/action';

class HomePage extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('http://localhost:5000/getposts')
            .then(res => res.json())
            .then(data => this.setState({ posts: data }))
    }

    render() {
        return (
            <div>
                <h1 className="banner_title">Book Doctor <span class="logout_button"><button onClick={() => {
                    localStorage.clear()
                    this.props.logout_user()
                    this.props.history.push('/login')
                }} >Logout</button></span><span class="profile"><button onClick={() => {
                    this.props.history.push('/profile')
                }} >
                    Profile</button></span></h1>
                <img src={process.env.PUBLIC_URL + "/images/banner_img.jpg"} />
                <div className="card_container">
                    {
                        this.state.posts.map(post => <Doctor_Card post={post} />)
                    }
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout_user: () => dispatch(logout_user())
});

export default connect(null, mapDispatchToProps)(HomePage);
