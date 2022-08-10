import Todo from "./Todo";

export const List = ({ todos, setTodos, doneView, todoView, isFiltered, status }) => {
  
  if(isFiltered === true && status === "Done") {
    return (
      <div>
        {doneView.map((todo) => (
          <Todo
            key={todo.id}
            uniqueID={todo.uniqueID}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    );
  } else if (isFiltered === true && status === "Todo") {
    return (
      <div>
        {todoView.map((todo) => (
          <Todo
            key={todo.id}
            uniqueID={todo.uniqueID}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    );
  } else if(isFiltered === true && status === "All") {

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          uniqueID={todo.uniqueID}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
  } else {
    return (
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            uniqueID={todo.uniqueID}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    );
    }
  
   
  
};
