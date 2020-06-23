import React from 'react';

class Header extends React.Component {
    render() {
        const { numTodos } = this.props;

        return(
            <h1 className='header'>
                You have {numTodos} Todos
            </h1>
          )
    }

}

export default Header;