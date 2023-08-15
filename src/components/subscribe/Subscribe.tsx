import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section id="subscribtion" className="subscribe">
      <div className="container">
        <div className="subscribe__float">
          <div className="subscribe__wrapper">
            <div className="subscribe__left">
              <h2>
                Subscribe to <span className="highlight">Newsletter</span>
              </h2>
              <p>Subscribe to get latest updates and information.</p>
            </div>

            <div className="subscribe__right">
              <input type="text" placeholder="Email" />
              <button className="primary__btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
