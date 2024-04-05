import "./highlights.css";

const Tick = ({ children }) => {
  let childrenX = "Sign Up";

  children = children || childrenX;

  return (
    <div className="flex">
      <div className="img">
        <img src="/tick.svg" alt="omooo..." />
      </div>
      <div className="child">
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Tick;
