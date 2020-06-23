import React from 'react';
import Header from './header';
import TodoList from './todo-list';
import AddTodo from './add-todo';

class TodoContainer extends React.Component {
    state = {
        tasks: ['task 1', 'task 2', 'task 3']
    };

    handleDelete = (index) => {
        const newArr = [ ...this.state.tasks ];
        newArr.splice(index, 1);
        this.setState({ tasks: newArr });
    }

    handleSubmit = (newTodo) => {
        console.log(newTodo);
        const newArr = [ ...this.state.tasks, newTodo ];
        this.setState({ tasks: newArr });
    }

    render() {
        const { tasks } = this.state;

        return(
            <div className='wrapper'>
                <Header numTodos={tasks.length} />
                <TodoList tasks={tasks} onDelete={this.handleDelete} />
                <AddTodo onSubmit={this.handleSubmit} />
            </div>
        );
    }

}

export default TodoContainer;