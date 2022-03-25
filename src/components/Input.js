import "../App.css";

export default function Input({ todos, setTodos, input, setInput }) {
  const inputValueHandler = (e) => {
    setInput(e.target.value);
  };

  const inputSubmitHandler = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        {
          label: input,
          completed: false,
          id: Date.now(),
          uniqueID: Math.random() + 1,
        },
      ]);

      setInput("");
    }
  };

  const checkAll = () => {
    setTodos(
      todos.map((stateItem) => {
        if (todos.id === todos.id) {
          return {
            ...stateItem,
            completed: !stateItem.completed,
          };
        }
        return stateItem;
      })
    );
  };

  const deleteAll = () => {
    setTodos(todos.filter((stateItem) => stateItem.id == todos.id));
  };

  return (
    <>
      <div className="input-wrapper">
        <input
          value={input}
          onChange={inputValueHandler}
          onKeyDown={inputSubmitHandler}
          className="input"
          placeholder="What do you need to do?"
        />
      </div>

      <div className="button-wrapper">
        <button onClick={checkAll} className="button allbtn">
          Complete All
        </button>
        <button onClick={deleteAll} className="button allbtn">
          Delete All
        </button>
      </div>
    </>
  );
}
