import React, { useState } from "react";
import Todo from "../../Components/Todo/Todo";
import Header from "../../Components/Header/Header";

import './todoApp.scss';

function TodoApp() {
    const [todoValue, setTodoValue] = useState('');
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

    localStorage.setItem('todos', JSON.stringify(todos));

    return (
        <React.Fragment>
            <h1 className="main-title">Todo list</h1>
            <div className="todo">
                <Header todoValue={todoValue} setTodoValue={setTodoValue} setTodos={setTodos} todos={todos} />
                <main className="todo__main">
                    <section className="todo__tasks">
                        {!todos.length
                            ?
                                <h4 className="todo__notask">У вас нет заданий :)</h4>
                            :
                                todos.map((todo) => {
                                    return (
                                        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
                                    )
                                })
                        }
                        
                    </section>
                </main>
            </div>
        </React.Fragment>
    )
}

export default TodoApp;