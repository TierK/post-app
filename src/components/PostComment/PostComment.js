import React, { Component } from 'react'

export default class PostComment extends Component {
    render() {
        return (
            <div className="postComment">
                {this.props.text}
            </div>
        );
    }
}
