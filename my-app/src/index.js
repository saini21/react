import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

class TodoList extends React.Component {
	constructor(){
		super();

		this.state = {
			tasks: [{
				name : "Learn React JS",
				completed: false	
			},
			{
				name : "Learn Wordpress",
				completed: false	
			},
			{
				name : "Learn Laravel",
				completed: false	
			}],
			currentTask:""

		};

		this.changeStatus = this.changeStatus.bind(this);
		this.updateTask = this.updateTask.bind(this);
		this.addTask = this.addTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);


	}

	deleteTask(index){
		delete this.state.tasks[index];
		this.setState({
			tasks: this.state.tasks
		});
	}

	addTask(evt){
		evt.preventDefault();
		var tasks = this.state.tasks;
		tasks.push({
			name:this.state.currentTask,
			completed:false
		});

		this.setState({
			tasks,
			currentTask:""
		})

	}

	updateTask(newTask){
		this.setState({currentTask:newTask.target.value});
	}

	changeStatus(index){
		this.state.tasks[index].completed = ! this.state.tasks[index].completed;
		this.setState({
			tasks: this.state.tasks
		});
	}

	render(){
		return (
			<section className='row'>
			<div className="col-sm-3 col-md-2 sidebar">
			<h1>Tasks</h1>
			<ul className='nav nav-sidebar'>
			{ 
				this.state.tasks.map((task, index) => {
					return <TodoItem clickHandler={this.changeStatus} deleteCurentTask={this.deleteTask} index={index} key={task.name} task={task}  />
				})
			}

			</ul>
			</div>
			<div className='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>
				<TodoForm currentTask={this.state.currentTask} addTask={this.addTask} updateTask={this.updateTask} />	
			</div>
			</section>
			)
	}
}



ReactDOM.render(<TodoList />, document.getElementById('root'))