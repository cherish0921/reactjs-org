import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {seconds: 0}
    }
    tick(){
        this.setState(state => ({
            seconds: state.seconds+1
        }));
    }
    componentDidMount(){
        // TODO: 挂载和渲染之后
        // TODO: 类VUE beforeDestroy方法 mounted
        this.interval = setInterval(() => this.tick(),1000);
    }
    componentWillUnmount(){ 
        //TODO: 组件销毁前 
        //TODO: 类VUE beforeDestroy方法
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <h4>有状态组件</h4>
                <p>Seconds: {this.state.seconds}</p>
            </div>
        );
    }
}

export default Timer;