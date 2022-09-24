import React from "react";
import PropTypes from 'prop-types';

function Header({ todoValue, setTodoValue, setTodos, todos }) {

    const addTodo = () => {
        if(todoValue) {
            setTodos([...todos, {text: todoValue, id: Math.ceil(Math.random() * 1000)}]);
            setTodoValue('');
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }

    return (
        <header className="todo__header">
            <button type="button" className="todo__delete-all" onClick={() => {
                setTodos([]);
            }}>Del all</button>
            <input onKeyDown={(keyPress) => {
                if(keyPress.keyCode === 13) addTodo();
            }} className="todo__input" type="text" placeholder="Feed my pet..." value={todoValue} onChange={e => setTodoValue(e.target.value)} />
            <button type="button" className="todo__add" onClick={addTodo}>Add</button>
        </header>
    )
}

Header.propTypes = {
    todoValue: PropTypes.string, 
    setTodoValue: PropTypes.func, 
    setTodos: PropTypes.func,
    todos: PropTypes.array,
}

export default Header;