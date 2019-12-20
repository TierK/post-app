import React from 'react';
import PostButton from '../PostButton/PostButton.js';
import './PostReactions.scss';


class PostReactions extends React.Component {
    state = {
        likeCount: this.props.likeCount || 0,
    };


    likePost = () => {
        this.setState(state => ({
            likeCount: state.likeCount + 1,
        }));
    }

    commentPost = () => {
        console.log('comment clicked');
    }

    render() {
        return (
            <div className="PostReactions">
                <div className="reactionsTitles">
                    {this.state.likeCount} likes   
                    {this.props.commentCount} comments   
                    {this.props.shareCount} shares
                </div>
                <div>
                    <PostButton text="Like" action={this.likePost} disableOnClick={true} icon = {<img src="http://pngimg.com/uploads/like/like_PNG42.png" alt="likeIcon" style={{width: 20 + "px", height: 20 + "px"}}></img>}/>
                    <PostButton text="Comment" action={this.commentPost} icon = {<img src="http://pngimg.com/uploads/hands/hands_PNG908.png" alt="likeIcon" style={{width: 25 + "px", height: 20 + "px"}}></img>} />
                    <PostButton text="Share" action={null} icon = {<img src="http://pngimg.com/uploads/hands/hands_PNG909.png" alt="likeIcon" style={{width: 20 + "px", height: 20 + "px"}}></img>} />
                </div>
            </div>
        );
    }
}

export default PostReactions;
