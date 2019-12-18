import React, { Component } from 'react';
import './PostButton.scss';

export default class PostButton extends React.Component {
    state = {
        disabled: false,
    }

    onClick = () => {
        this.props.action();
        if (this.props.disableOnClick) {
            this.setState({
                disabled: true,
            });
        }
    }

    render() {
        return (
            <button className="PostButton btn" onClick={this.onClick} disabled={this.state.disabled}>
                {this.props.icon} {this.props.text}
            </button>
        );
    }
}

PostButton.defaultProps = {
    disableOnClick: false,
}

