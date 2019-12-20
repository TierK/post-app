import React, { Component } from 'react'

export default class PostComment extends Component {
    render() {
        return (
            <div className="postComment">
                <div>
                <div><i href="#"><img src={this.props.userPicUrl} alt ="user pic"/> </i></div>
                    <h5>
                        {this.props.author}
                    </h5>
                    {this.props.text}
                    </div>
                <div>{this.props.likeLink} {this.props.replayLink} {this.props.created} </div>
            </div>
        );
    }
}
