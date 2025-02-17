import React from 'react';
import AddTask from '../components/AddTask';
import Navbar from '../components/genericComponents/Navbar';
import Jumbotron from '../components/genericComponents/Jumbotron';
import Footer from '../components/genericComponents/Footer';
import '../App.css';

class TaskManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskValue: '',
      tasks: []
    };
     this.onChange = this.onChange.bind(this);
     this.addTaskEvent =  this.addTaskEvent.bind(this);
  }

  addTaskEvent(event){
    event.preventDefault();
    const {taskValue, tasks} = this.state;
    this.setState({
      tasks: [...tasks, taskValue],
      taskValue: ''
    });
  }
  onChange(event) {
    console.log(event);
    // const {taskValue} = this.state;
    this.setState({
      taskValue: event.target.value
    });
  }

   componentDidMount() {
   }
  render () {

    return (
    <div>
      <Navbar />
      <Jumbotron title="Tasks Manager" subtitle="Task Manager App" />
        <div className="container">
          <AddTask
            mono={this.onChange}
            valueForTask={this.state.taskValue}
            addTaskEvent={this.addTaskEvent}
            allTasks={this.state.tasks}
          />
        </div>
      <div>
      </div>
      <Footer />
    </div>
    );
  };
}

export default TaskManager;
