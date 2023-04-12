type ButtonProps = {
  animate?: boolean;
  value?: string;
};

import button from "./../assets/button-icon.svg";
const Button = ({ animate, value = "Like" }: ButtonProps) => {
  return (
    <div className={`btn ${animate ? "btn--animate" : ""}`}>
      <div>{value}</div>
      <img className="btn__heart" src={button} alt="heart" />
    </div>
  );
};
export default Button;
