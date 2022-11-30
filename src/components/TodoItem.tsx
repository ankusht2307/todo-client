import Button from './Button';
import Wrapper from './Wrapper';
import '../styles/todoItem.css';

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
        <Wrapper classNames="todo--wrapper_todo-list">
          <p key={todo.id}>{todo.todo}</p>
          <Button
            name="Edit Todo"
            onClick={editTodoHandler}
            classNames="todo--button_edit"
          />
          <Button
            name="Delete Todo"
            onClick={deleteTodoHandler}
            classNames="todo--button_delete"
          />
        </Wrapper>
      ))}
    </>
  );
};

export default TodoItem;
