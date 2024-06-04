import TodoItem from "./TodoItem.jsx";

import style from "/src/css/todoList.module.css";
export default function TodoList({ setTodo, todos, setTodos }) {
  const sortedTodo = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={style.todoList}>
      {sortedTodo.map((item) => (
        <TodoItem
          setTodo={setTodo}
          todos={todos}
          setTodos={setTodos}
          key={item.name}
          item={item}
        />
      ))}
    </div>
  );
}
