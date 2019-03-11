/**
 * @description JSX中嵌入表达式
 * Funtion方法
 */

import React, { Component } from 'react';

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

/**
 * @description Function过滤用户信息
 * @param {Object} user 
 */
function formatName(user){
    return `${user.firstName}  ${user.lastName}`
}
// const elementsecond = <h1>Hello，{formatName(user)}</h1>;

function getGreeting(user){
    if(user){
        return <h1>Hello，{formatName(user)}.</h1>
    }else{
        return <h1>Hello, Stranger.</h1>
    }
}

const elementsecond = getGreeting(user);

class FormatName extends Component {
    render(){
        return (
            elementsecond
        )
    }
}

export default FormatName;