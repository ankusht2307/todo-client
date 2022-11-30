import '../styles/todoWrapper.css';

type WrapperProps = {
  children: React.ReactNode;
  classNames: string;
};

const Wrapper = ({ children, classNames }: WrapperProps) => {
  return <div className={classNames}>{children}</div>;
};

export default Wrapper;
