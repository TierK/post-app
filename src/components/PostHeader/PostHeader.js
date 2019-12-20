import React, { Component } from 'react';
import './PostHeader.scss'

export default class PostHeader extends Component {

    render() {
        return (
            
            <div className="PostHeader">
                <img src={this.props.authorProfileImg || "http://icons.iconarchive.com/icons/yellowicon/halloween/256/Black-Cat-icon.png"} alt="user pic"/>
                <div className="userData">
                     <a href={this.props.authorProfileUrl}>{this.props.authorName}</a>
                     <span>{this.props.dateCreated}</span>
                </div>
            </div>
        );
    }
}

