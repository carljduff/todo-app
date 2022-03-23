import Todo from './Todo'

export const List = ({todos}) => {
    return (
        <div>
        {todos.map((todo) => (
            <Todo key={todo.id} label={todo.label} />
        ))}
        </div>
    )
}