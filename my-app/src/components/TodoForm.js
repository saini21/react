import React from 'react';

// class TodoItem extends React.Component {
// 	render () {
// 		return <li onClick={() => this.props.clickHandler(this.props.index)} className={ this.props.task.completed ? 'completed' : 'pending'}>{this.props.task.name}</li>
// 	}
// }

const TodoForm = (props) => {
	return (
		<form onSubmit={props.addTask} >
		<br/>
		<div className="input-group mb-3">
		<input value={props.currentTask}  placeholder="Add new task..." onChange={props.updateTask} className='form-control'/>
		<div className="input-group-append">
		<button type="submit" className='btn btn-outline-secondary'>Add Task</button>
		</div>
		</div>
		</form>
		)

}

export default TodoForm;