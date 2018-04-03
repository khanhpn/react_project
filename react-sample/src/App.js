import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import Title from './components/Title';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tasks: [
        {
          id: this.generateID(),
          name: "learn js",
          status: true
        },
        {
          id: this.generateID(),
          name: "learn react",
          status: true
        },
        {
          id: this.generateID(),
          name: "learn java",
          status: false
        }
      ],
      isDisplayForm: false
    };
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000000000).toString(10);
  }

  generateID() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  componentWillMount = () => {
    console.log("component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  onToggleForm = (value) => {
    this.setState({
      isDisplayForm: !value
    })
  }

  render() {
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    var { tasks, isDisplayForm } = this.state;

    var elmTaskForm = isDisplayForm ? <TaskForm /> : '';
    return (
      <div className="container">
        <Title />
        <div className="row">
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "col-xs-0 col-sm-0 col-md-0 col-lg-0"}>
            {elmTaskForm}
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary" onClick={() => this.onToggleForm(isDisplayForm)}><span className="fa fa-plus mr-5"></span>Thêm Công Việc</button>
            <Control />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
