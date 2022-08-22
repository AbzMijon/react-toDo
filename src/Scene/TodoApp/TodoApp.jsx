import React from "react";

import Header from "../../Components/Header/Header";
import './todoApp.scss';

function TodoApp() {
    return (
        <React.Fragment>
            <div className="todo">
                <Header />
                <main className="todo__main">
                    <section className="todo__tasks"></section>
                </main>
            </div>
        </React.Fragment>
    )
}

export default TodoApp;