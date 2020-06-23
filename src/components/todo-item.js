import React from 'react';

class TodoItem extends React.Component {
    render() {
        const { content, id, onDelete } = this.props;

        return(
            <div className='list-item'>
              {content}
              <button class="delete" onClick={() => onDelete(id)}>x</button>
            </div>
          );
    }

}

export default TodoItem;