import './Slider.css';

function Slider({ articles }) {
  return (
    <article className="slider">
      {articles.map(a => (
        <div id={`n-${a.id}`} className="slider__item">
          <div className="slider__img"
            style={{
              backgroundImage: `url('${a.image}')`
            }}
            >
          </div>
          <div className="slider__itemText">
            <h2 className="slider__title">
              <a href={`#n-${a.id}`}>
                {a.title}
              </a>
            </h2>
            <p className="slider__summary"
              dangerouslySetInnerHTML={{ __html: a.summary }}
            >
            </p>
          </div>
        </div>
      ))}
    </article>
  );
}

export default Slider;

