import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

const todo = [
  { text: 'Mercar', completed: false },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'Leer', completed: true }
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {todo.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;