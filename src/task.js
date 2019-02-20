import React, { Component } from 'react';
import './App.css';

class Task extends Component {

    render() {
        return (
            <div>
                <h1 className={this.props.task.cross} onClick={() => this.props.crossTask(this.props.index)}>{this.props.task.task}</h1>
            </div>
        );
    }
}
export default Task;

//'display-4'
