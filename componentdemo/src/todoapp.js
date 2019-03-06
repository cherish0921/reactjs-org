import React, { Component } from 'react';

class TodoApp extends Component {
    constructor(props){
        super(props);
        this.state = { 
            items: localStorage.getItem('todo') != null ? JSON.parse(localStorage.getItem('todo')) : [], //TODO: 保存备忘录 
            text: '' //TODO: 默认input value
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){ 
        //TODO: 输入改变input value值
        this.setState({text: e.target.value});
    }
    handleSubmit(e){
        // TODO: 提交表单
        e.preventDefault(); //TODO: 阻止表单默认提交行为
        if(!this.state.text.length){
            return 
        }
        if(this.state.items.find( item => item.text === this.state.text)){
            return
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        }
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }
    render(){
        return (
            <div>
                <h4>备忘录-应用</h4>
                <TodoList items={this.state.items}></TodoList>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo-input" className="col-sm-2">请输入事项?</label>
                    <input id="todo-input" onChange={this.handleChange} value={this.state.text}/>
                    <button type="submit">添加&nbsp;#{this.state.items.length+1}</button>
                </form>
            </div>
        )
    }
}

class TodoList extends Component {
    render(){
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

export default TodoApp;