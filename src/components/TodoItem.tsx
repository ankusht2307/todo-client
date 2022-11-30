import Button from './Button';

type TodoItemProps = {
  todos: {
    id: string;
    todo: string;
    isDone: boolean;
  }[];
};

const TodoItem = ({ todos }: TodoItemProps) => {
  const editTodoHandler = () => {
    console.log('edited');
  };

  const deleteTodoHandler = () => {
    console.log('deleted');
  };

  return (
    <>
      {todos.map((todo) => (
        <>
          <p key={todo.id}>{todo.todo}</p>
          <Button
            name="Edit Todo"
            onClick={editTodoHandler}
            classNames="todo--button_class"
          />
          <Button
            name="Delete Todo"
            onClick={deleteTodoHandler}
            classNames="todo--button_class"
          />
        </>
      ))}
    </>
  );
};

export default TodoItem;
