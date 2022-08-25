import React, { useState } from "react";
import Todo from "../../Components/Todo/Todo";
import Header from "../../Components/Header/Header";

import './todoApp.scss';

function TodoApp() {
    const [todoValue, setTodoValue] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        setTodos([...todos, {text: todoValue, id: Math.ceil(Math.random() * 1000)}]);
        setTodoValue('');
    }


    return (
        <React.Fragment>
            <h1 className="main-title">Todo list</h1>
            <div className="todo">
                <header className="todo__header">
                    <button type="button" className="todo__delete-all" onClick={() => {
                        setTodos([]);
                    }}>Del all</button>
                    <input onKeyDown={(keyPress) => {
                        if(keyPress.keyCode === 13) addTodo();
                    }} className="todo__input" type="text" placeholder="Feed my pet..." value={todoValue} onChange={e => setTodoValue(e.target.value)} />
                    <button type="button" className="todo__add" onClick={addTodo}>Add</button>
                </header>
                <main className="todo__main">
                    <section className="todo__tasks">
                        {todos.map((todo) => {
                            return (
                                <div className="card" key={todo.id}>
                                    <button className="card__close" onClick={(e) => {
                                        const cardID = todo.id;
                                        const deletedTodoArray = todos.filter((todo) => todo.id !== cardID);
                                        setTodos(deletedTodoArray);
                                    }}>x</button>
                                    <p className="card__text">{todo.text}</p>
                                </div>
                            )
                        })}
                    </section>
                </main>
            </div>
        </React.Fragment>
    )
}

export default TodoApp;