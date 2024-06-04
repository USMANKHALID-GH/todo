import style from "/src/css/todoItem.module.css";
export default function TodoItem({ setTodo, item, todos, setTodos }) {
  const deleteItem = (item) => {
    if (confirm("Do you want to delete this task?")) {
      setTodos(todos.filter((m) => m.name !== item.name));
    }
  };

  const itemCicked = (item) => {
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const updateItem = (item) => {
    if (item.done) {
      window.alert("Cannot delete completed task!");
    } else {
      setTodos(todos.filter((m) => m.name !== item.name));
      setTodo({ name: item.name, done: item.done });
    }
  };

  const doneCss = item.done ? style.done : "";
  return (
    <div className={style.main}>
      <div className={style.item}>
        <span className={doneCss} onClick={() => itemCicked(item)}>
          {item.name}
        </span>
      </div>
      <div>
        <span>
          <button onClick={() => deleteItem(item)} className={style.but}>
            X
          </button>
        </span>
      </div>
      <div>
        <span>
          <button className={style.but} onClick={() => updateItem(item)}>
            Up
          </button>
        </span>
      </div>
    </div>
  );
}
