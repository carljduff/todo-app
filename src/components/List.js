import Todo from './Todo'

export const List = ({todos, setTodos}) => {
    return (
        <div>
        {todos.map((todo) => (
            <Todo key={todo.id} uniqueID={todo.uniqueID} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
        </div>
    )
}