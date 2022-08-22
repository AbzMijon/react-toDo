import React, { useState } from "react";
import Todo from "../../Components/Todo/Todo";
import Header from "../../Components/Header/Header";

import './todoApp.scss';

function TodoApp() {
    const [todoValue, setTodoValue] = useState('');
    const [todos, setTodos] = useState([]);
    console.log(todos);

    return (
        <React.Fragment>
            <h1 className="main-title">Todo list</h1>
            <div className="todo">
                {/* <Header todoValue={todoValue} setTodoValue={setTodoValue}/> */}
                <header className="todo__header">
                    <button type="button" className="todo__delete-all">Del all</button>
                    <input className="todo__input" type="text" placeholder="Feed my pet..." value={todoValue} onChange={e => setTodoValue(e.target.value)} />
                    <button type="button" className="todo__add" onClick={() => {
                        setTodos([...todos, {text: todoValue}]);
                        setTodoValue('');
                    }}>Add</button>
                </header>
                <main className="todo__main">
                    <section className="todo__tasks">
                        {todos.map(todo => {
                            return (
                                <div className="card">
                                    <button className="card__close">x</button>
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