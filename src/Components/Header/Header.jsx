import React from "react";

function Header({ todoValue, setTodoValue }) {
    return (
        <header className="todo__header">
            <button type="button" className="todo__delete-all">Del all</button>
            <input className="todo__input" type="text" placeholder="Feed my pet..." value={todoValue} onChange={e => setTodoValue(e.target.value)} />
            <button type="button" className="todo__add">Add</button>
        </header>
    )
}

export default Header;