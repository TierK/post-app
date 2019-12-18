import React, { Component } from 'react';
import PostHeader from '../PostHeader/PostHeader';
import PostContent from '../PostContent/PostContent';
import PostReactions from '../PostReactions/PostReactions';
import PostComment from '../PostComment/PostComment.js';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <PostHeader author={this.props.author} time={this.props.time} />
                <PostContent text={this.props.content} />
                <PostReactions likeCount={1} />
                {[].map(comment => <PostComment />)}
            </div>
        );
    }
}
