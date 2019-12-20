import React, { Component } from 'react';
import './PostHeader.scss'

export default class PostHeader extends Component {

    render() {
        return (
            
            <div className="PostHeader">
                <img src={this.props.authorProfileImage} alt="user pic"/>
                <div>
                    <a href={this.props.authorProfileUrl}>{this.props.authorName}</a>
                    <span>{this.props.dateCreated}</span>
                </div>
            </div>
        );
    }
}

