import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    totalTodo,
    completedTodo,
    searchValue,
    setSearchValue,
    searchedTodo,
    completeTodo,
    deleteTodo }) {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodo}
                completed={completedTodo}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedTodo.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
                <TodoItem />
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };