import "./Testimonials.css";
import Slider from "react-slick";
import customerImg from "../../assets/teacher1C.png";
import customerImg2 from "../../assets/teacher2C.png";
import customerImg3 from "../../assets/teacher3C.png";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  const customerData = [
    {
      img: customerImg,
      name: "Maros Dlhy",
      position: "CEO",
      said: `"Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Numquam laborum omnis earum odio, totam sapiente voluptates
      cum nesciunt, autem repellat repudiandae culpa error enim
      aliquid commodi suscipit vero eius. Id rerum molestias neque
      expedita explicabo laborum harum facere aliquam pariatur?"`,
    },
    {
      img: customerImg2,
      name: "Lena Kratka",
      position: "Artist",
      said: `"Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Numquam laborum omnis earum odio, totam sapiente voluptates
      cum nesciunt, autem repellat repudiandae culpa error enim
      aliquid commodi suscipit vero eius. Id rerum molestias neque
      expedita explicabo laborum harum facere aliquam pariatur?"`,
    },
    {
      img: customerImg3,
      name: "Milos Forman",
      position: "Designer",
      said: `"Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Numquam laborum omnis earum odio, totam sapiente voluptates
      cum nesciunt, autem repellat repudiandae culpa error enim
      aliquid commodi suscipit vero eius. Id rerum molestias neque
      expedita explicabo laborum harum facere aliquam pariatur?"`,
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__wrapper">
          <div className="testimonials__top">
            <h2>
              Customers' <span className="highlight">Feedback</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              dolore?
            </p>
          </div>
          <div className="slider__wrapper">
            <Slider {...settings}>
              {customerData.map((testimonialItem, index) => (
                <div className="slider__item" key={index}>
                  <p>{testimonialItem.said}</p>

                  <div className="customer__details">
                    <div className="customer__img">
                      <img src={testimonialItem.img} alt="" />
                    </div>
                    <div>
                      <h5 className="customer__name">{testimonialItem.name}</h5>
                      <p className="description">{testimonialItem.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
