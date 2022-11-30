type TodoContainerProps = {
  children: React.ReactNode;
};

const TodoContainer = ({ children }: TodoContainerProps) => {
  return <div>{children}</div>;
};

export default TodoContainer;
