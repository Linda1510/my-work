const Grid = () => {
  return (
    <div className="grid">
      <div className="grid--card">
        <img
          width="100px"
          src="https://source.unsplash.com/random/?butterfly"
          alt="image"
        />
      </div>
      <div className="grid--card__title">
        <h1>Naslov</h1>
      </div>
      <div className="grid--card__desc">
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
    </div>
  );
};
export default Grid;
