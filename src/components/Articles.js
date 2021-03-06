import './Articles.css';

function Articles({ articles }) {
  return (
    <div className="articles">
      {articles.map(a => (
        <article className="articles__item">
          <h3 className="articles__title">
            <a className="articles__link" href={`#n-${a.id}`}>
              {a.title}
            </a>
          </h3>
        </article>
      ))}
      <div className="articles___allNews">
        <div className="articles__dots">
          {articles.map(a => (
            <a className="articles__dot" href={`#n-${a.id}`}>
            </a>
          ))}
        </div>
        <a href="test">ALL NEWS</a>
      </div>
    </div>
  );
}

export default Articles;
