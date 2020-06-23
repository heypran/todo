import React from 'react';

class AddTodo extends React.Component {
    state = {
        todo: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.todo);
        this.setState({ todo: '' });
    }
    
    render() {
      return(
        <form className='todo-form' onSubmit={this.handleSubmit}>
          <input 
            type='text'
            className='input'
            placeholder='Enter Item'
            value={this.state.todo}
            onChange={(e) => this.setState({ todo: e.target.value})}
          />
          <button className='button'>Submit</button>
        </form>
      );
    }
}

export default AddTodo;