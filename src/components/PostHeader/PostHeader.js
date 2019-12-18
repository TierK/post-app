import React, { Component } from 'react';
import './PostHeader.css'

export default class PostHeader extends Component {
    render() {
        return (
            <div className="PostHeader">
                <img src={this.props.authorProfileImage} />
                <div>
                    <a href={this.props.authorProfileUrl}>{this.props.authorName}</a>
                    <span>{this.props.postCreatedTime}</span>
                </div>
            </div>
        );
    }
}

