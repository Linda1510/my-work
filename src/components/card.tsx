import Button from "./button";

const Card = () => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          width="50px"
          src="https://source.unsplash.com/random/?butterfly"
          alt="image"
        />
      </div>

      <h1 className="card__title">Naslovvvv</h1>

      <p className="card__desc">
        Lorem Ipsum has beennn the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen boooook. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially
        unchangeddd.
      </p>
      <div className="card__btn">
        <Button />
        <Button />
      </div>
    </div>
  );
};
export default Card;
