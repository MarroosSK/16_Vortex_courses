import "./Hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          <h2>Let the Vortex pull you in</h2>
          <h2 className="highlight">journey of Learning</h2>

          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, corporis.
          </p>
          <div className="hero__btn">
            <button className="primary__btn">Explore Courses</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
