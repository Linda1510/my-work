const Card2 = () => {
  return (
    <div className="card2">
      <div className="card2__image">
        <img src="https://source.unsplash.com/random/50x50/?lion" alt="lion" />
      </div>
      <div className="card2__title">
        <h1>Gameweek 17</h1>
        <p>Premier leauge</p>
      </div>
      <div className="card2__main">
        <h2>Winning prize</h2>
        <div>Signed BVB Jersey</div>
        <div className="card2__tag">
          <div>14</div>
          <div>Days</div>
        </div>
      </div>
      <div className="card2__footer">
        <p>Game points</p>
        <p>Game enteries</p>
        <p>Reminder</p>
      </div>
    </div>
  );
};

export default Card2;
