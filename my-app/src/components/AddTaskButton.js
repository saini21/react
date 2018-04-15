import React from 'react';

// class TodoItem extends React.Component {
// 	render () {
// 		return <li onClick={() => this.props.clickHandler(this.props.index)} className={ this.props.task.completed ? 'completed' : 'pending'}>{this.props.task.name}</li>
// 	}
// }

const TodoItem = (props) => {
	return (
		<li 
		onClick={() => props.clickHandler(props.index)} 
		className={ props.task.completed ? 'completed' : 'pending'}>
		{props.task.name}
		</li>
		)
	}

	export default TodoItem;