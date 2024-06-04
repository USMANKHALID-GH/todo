import { useState } from "react";

import styles from "/src/css/form.module.css";
export default function Form({ todo, setTodo, todos, setTodos }) {
  // const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmition = (e) => {
    e.preventDefault();

    if (todo.name === "") {
      window.alert("Task  Cannot be Empty");
    } else {
      setTodos([...todos, todo]);
      setTodo({ ...todo, name: "" });
    }
  };
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmition}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTodo({ ...todo, name: e.target.value })}
            placeholder="enter your task"
            value={todo.name}
          />
          <button className={styles.button} type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}
