import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
        alert('Mensaje del Modal');
    };

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton()}
        >
            +
        </button>
    );
}

export { CreateTodoButton };