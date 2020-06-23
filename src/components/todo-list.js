import React from 'react';
import TodoItem from './todo-item';

class TodoList extends React.Component {
    render() {
        const { tasks, onDelete } = this.props;
        return( 
            <div className='list-wrapper'>
                {tasks.map((todo, index) => {
                    return <TodoItem content={todo} key={index} id={index} onDelete={onDelete} />
                })}
            </div>
        );
    }

}

export default TodoList;