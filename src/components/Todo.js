import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

export default function Todo({ todos, todo, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((stateItem) => stateItem.id !== todo.id));
  };

  const checkHandler = () => {
    setTodos(
      todos.map((stateItem) => {
        if (stateItem.id === todo.id) {
          return {
            ...stateItem,
            completed: !stateItem.completed,
          };
        }
        return stateItem;
      })
    );
  };

  return (
    <>
      <div className="todo-group">
        <button onClick={checkHandler} className="button check">
          <i className="fa-solid fa-circle-check"></i>
        </button>
        <h4 className={`todo ${todo.completed ? "line" : ""}`}>{todo.label}</h4>
        <button onClick={deleteHandler} className="button delete-btn">
          <i className="fa-solid fa-circle-minus"></i>
        </button>
      </div>
    </>
  );
}
