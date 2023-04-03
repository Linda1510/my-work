import left from "./../assets/image-left.svg";
import right from "./../assets/image-right.svg";
const Paggination = () => {
  return (
    <div className="paggination">
      <img className="paggination__image" src={left} alt="left" />
      <div>1</div>
      <img className="paggination__image" src={right} alt="right" />
    </div>
  );
};
export default Paggination;
