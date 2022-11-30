type ButtonProps = {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  classNames: string;
};

const Button = ({ name, onClick, classNames }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classNames}>
      {name}
    </button>
  );
};

export default Button;
