import React, { Component } from 'react'
import './HomePage.css'
import Doctor_Card from '../Doctor_Card/Doctor_Card';
import image from '../../banner_img.jpg';

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
                <img src={image} />
                <div className="card_container">
                    {
                        this.state.posts.map(post =><Doctor_Card post={post}/>)
                    }
                </div>

            </div>
        )
    }
}
