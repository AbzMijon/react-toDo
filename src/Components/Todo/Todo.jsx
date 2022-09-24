import React from "react";
import PropTypes  from 'prop-types';
import './todo.scss';

function Todo({ todo, todos, setTodos }) {
    return (
        <div className="card">
            <button className="card__close" onClick={(e) => {
                const cardID = todo.id;
                const deletedTodoArray = todos.filter((todo) => todo.id !== cardID);
                setTodos(deletedTodoArray);
                localStorage.setItem('todos', JSON.stringify(todos));
            }}>x</button>
            <p className="card__text">{todo.text}</p>
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired, 
    todos: PropTypes.array.isRequired, 
    setTodos: PropTypes.func,
}

export default Todo;