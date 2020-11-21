  import './Slider.css';

function Slider({ articles }) {
  return (
    <article className="slider">
      <div className="slider__wrapper">
      {articles.map(a => (
        <div id={`n-${a.id}`} className="slider__item">
            <div className="slider__img"
              style={{
                backgroundImage: `url('${a.image}')`
              }}
              >
            </div>
            <div className="slider__text">
              <h2 className="slider__title">
                <a href={`#n-${a.id}`}>
                  {a.title}
                </a>
              </h2>
              <p
                dangerouslySetInnerHTML={{ __html: a.summary }}
              >
              </p>
            </div>
        </div>
      ))}
      </div>
    </article>
  );
}

export default Slider;

