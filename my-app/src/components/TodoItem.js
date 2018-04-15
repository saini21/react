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
		className={ props.task.completed ? 'completed' : 'pending'} 
		title={ props.task.completed ? 'completed' : 'pending'}>
			<div className='row'>
				<div className='col-md-9'>
				{props.task.name}
				</div>
				<div className='col-md-3'>
				<button title='Remove Task' className='btn btn-sm btn-danger' onClick={
					(evt) => {
						evt.stopPropagation();
						props.deleteCurentTask(props.index);
					}
				}>X</button>
				</div>
			</div>
		</li>
		)
	}

	export default TodoItem;