import React, { Component } from 'react';
import './App.css';
import Task from './task';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {

  state = {

    formData: {
      task: '',
    },
    tasks: [],
  }

  updateForm = event => {
    const newData = event.target.value
    const originalState = this.state.formData
    const copy = Object.assign({}, originalState)
    const key = event.target.name
    copy[key] = newData
    this.setState({
      formData: copy
    })
  }

  submitForm = event => {
    event.preventDefault()
    const copy = this.state.tasks.slice(0)
    copy.push(this.state.formData)
    this.setState({
      tasks: copy,
      formData: {
        task: '',
      }
    })
  }

  crossTask = (index) => {
    const task = this.state.tasks[index];
    task.cross = 'crossed'
    console.log(task)
  }

  render() {

    const tasksList = this.state.tasks.map((task, index) => {
      return <Task crossTask={this.crossTask} task={task} index={index} />
    })

    return (
      <div className='container'>
        <form onSubmit={this.submitForm}>
          <input className="input-group input-group-lg mt-3" type='text' name='task' onChange={this.updateForm} value={this.state.formData.task} />
          <button type='submit' className="btn btn-secondary btn-lg ml-2 mt-2">Add</button>
        </form>
        {tasksList}
      </div>
    );
  }
}

  export default App;
