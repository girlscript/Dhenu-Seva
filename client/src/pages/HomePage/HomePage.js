import React, { Component } from 'react'
import './HomePage.css'
import Doctor_Card from '../../components/Doctor_Card/Doctor_Card';

export default class HomePage extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/getposts')
        .then(res => res.json())
        .then(data => this.setState({ posts: data }))
    }

    render() {
        return (
            <div>
                <h1 className="banner_title">Book Doctor</h1>
                <img src={process.env.PUBLIC_URL + "/images/banner_img.jpg"} />
                <div className="card_container">
                    {
                        this.state.posts.map(post =><Doctor_Card post={post}/>)
                    }
                </div>

            </div>
        )
    }
}
