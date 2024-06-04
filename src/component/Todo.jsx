import Footer from "./Footer.jsx";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ name: "", done: false });
  const completed = todos.filter((todo) => todo.done).length;

  return (
    <div>
      <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodo={setTodo} setTodos={setTodos} />
      <Footer completed={completed} notDone={todos.length - completed} />
    </div>
  );
}
