import React, { Component } from 'react';
import './PostImage.scss';

export default class PostImage extends Component {
    render() {
        return (
            <div className="PostImage">
                 <img src={this.props.imageUrl} alt={this.props.imageAlt}/>
            </div>
        )
    }
}
