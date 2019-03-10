import React, { Component } from 'react';

class Avatar extends Component {
    render(){
        return (
            <img src={this.props.headPhoto} alt="用户头像"/>
        )
    }
}

class UserInfo extends Component {
    render(){
        return (
            <div className="userinfo">
                <Avatar headPhoto={this.props.user.headPhoto}></Avatar>
                <div className="username">用户名：{this.props.user.nickName}</div>
            </div>
        )
    }
}

class Comment extends Component {
    constructor(props){
        super(props);
        this.userinfo = {
            userId: 499475,
            "nickName":"宇智波鼬",
            "headPhoto":"https://image.ppset.cn/avatar/29bfd45ca9ee45888ded619837fe33a4.jpg",
            "appRole":null,
            "launchProjectCount":0,
            "following":1,
            "followers":4,
            "telephone":"130****2908",
            "introduction":"塔格利安万岁塔格利安万岁"
        }
    }
    render(){
        return (
            <div className="Comment">
                <UserInfo user={this.userinfo}></UserInfo>
                <div className="Comment-body">用户ID：{this.userinfo.userId}</div>
                <div className="Comment-footer">{this.userinfo.introduction}</div>
            </div>
        )
    }
}

export default Comment