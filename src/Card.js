function Card({ image, title, food, price, text, stars }) {
  return (
    <div className="card">
      <img src={image} alt="img" className="dp" />
      {!food && <img src={stars} alt="reviews" className="stars" />}
      <span className="title">{title}</span>
      {food && <span>{price}</span>}
      <p>{text}</p>
      {food && <button>See More &rarr;</button>}
    </div>
  );
}

export default Card;
