import '../styles/todoContainer.css';

type TodoContainerProps = {
  children: React.ReactNode;
  classNames: string;
  heading: string;
};

const TodoContainer = ({
  children,
  classNames,
  heading,
}: TodoContainerProps) => {
  return (
    <div className={classNames}>
      <h1>{heading}</h1>
      {children}
    </div>
  );
};

export default TodoContainer;
