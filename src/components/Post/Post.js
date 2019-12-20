import React, { Component } from 'react';
import PostHeader from '../PostHeader/PostHeader';
import PostContent from '../PostContent/PostContent';
import PostReactions from '../PostReactions/PostReactions';
import PostComment from '../PostComment/PostComment.js';
import './Post.scss';
import PostImage from '../PostImage/PostImage';

export default class Post extends Component {
    
    render() {
        function formatDate(){
            const date = new Date();
            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            return months[date.getMonth()] + ' ' + date.getDate();
        }

        return (
            <div className="Post">
                <PostHeader authorName={'Kim'} 
                            dateCreated={formatDate(this.props.dateCreated)} 
                            authorProfileUrl = {"http://www.downloadclipart.net/medium/46586-pokemon-icon-images.png"}
                            authorProfileImage={this.props.authorProfileImage} 
                            />
                <PostImage imageUrl = {"https://i.ytimg.com/vi/q7NFgJ8Zmfs/maxresdefault.jpg"} imageAlt={"Tom & Jerry"} />
                <PostContent text={this.props.content} />
                <PostReactions likeCount={1} />
                {[].map(comment => <PostComment
                                       userPicUrl = {comment.userPicUrl}
                                       author = {comment.author}
                                       text = {comment.text}
                                       likeLink = {comment.likeLink}
                                       replayLink = {comment.replayLink}
                                       created = {formatDate(comment.created)}
                />)}
                <PostComment/>
            </div>
        );
    }
}