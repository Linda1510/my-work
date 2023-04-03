import button from "./../assets/button-icon.svg";
const Button = () => {
  return (
    <div className="btn">
      <div>Like</div>
      <img className="btn__heart" src={button} alt="heart" />
    </div>
  );
};
export default Button;
