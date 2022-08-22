import React from "react";

import './todo.scss';

function Todo({ todoValue }) {
    return (
        <div className="card">
            <button className="card__close">x</button>
            <p className="card__text">{todoValue}</p>
        </div>
    )
}

export default Todo;