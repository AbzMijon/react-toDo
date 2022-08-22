import React from "react";

import './header.scss';

function Header() {
    return (
        <header className="todo__header">
            <button type="button" className="todo__delete-all">Del all</button>
            <input className="todo__input" type="text" placeholder="Feed my pet" />
            <button type="button" className="todo__add">Add</button>
        </header>
    )
}

export default Header;