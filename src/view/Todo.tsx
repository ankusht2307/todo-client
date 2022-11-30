import Button from '../components/Button';
import Input from '../components/Input';
import TodoContainer from '../components/TodoContainer';
import TodoItem from '../components/TodoItem';

const Todo = () => {
  const Todos = [
    {
      id: '1',
      todo: 'Do 1',
      isDone: true,
    },
    {
      id: '2',
      todo: 'Do 2',
      isDone: true,
    },
    {
      id: '3',
      todo: 'Do 3',
      isDone: false,
    },
  ];
  const addTodoHandler = () => {
    console.log('added');
  };

  return (
    <TodoContainer>
      <Input
        type="text"
        classNames="todo--input_class"
        placeholder="Add Todo..."
      />
      <Button
        name="Add Todo"
        onClick={addTodoHandler}
        classNames="todo--button_class"
      />
      <TodoItem todos={Todos} />
    </TodoContainer>
  );
};

export default Todo;
