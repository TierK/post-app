import React, { Component } from 'react';
import './PostContent.css';

export default class PostContent extends Component {
    render() {
        return (
            <div className="PostContent">
                {this.props.text}
            </div>
        );
    }
}
