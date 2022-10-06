import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

const defaultTodo = [
  { text: 'Mercar', completed: false },
  { text: 'Hacer ejercicio', completed: false },
  { text: 'Leer', completed: true }
]

function App() {
  const [todo, setTodo] = React.useState(defaultTodo);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodo = todo.filter(todo => !!todo.completed).length;
  const totalTodo = todo.length;

  let searchedTodo = [];

  if (searchValue.length >= 1) {
    searchedTodo = todo.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

  } else {
    searchedTodo = todo;
  }

  const completeTodo = (text) => {
    const todoIndex = todo.findIndex(todo => todo.text === text);

    const newTodo = [...todo];
    newTodo[todoIndex].completed = true;

    setTodo(newTodo);
  }

  const deleteTodo = (text) => {
    const todoIndex = todo.findIndex(todo => todo.text === text);
    // const newTodo = todo.filter(todo => todo.text !== text)

    const newTodo = [...todo];
    newTodo.splice(todoIndex, 1);

    setTodo(newTodo);
  }

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

export default App;