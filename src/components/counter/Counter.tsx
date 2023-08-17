import { useEffect } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import people from "../../assets/people2.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { counterData } from "../../utils/dummyData";

const leftVariants = {
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  hidden: { x: "-100%", opacity: 0 },
};

const rightVariants = {
  visible: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  hidden: { x: "+100%", opacity: 0 },
};

const Counter = () => {
  const controls = useAnimation();

  const [leftRef, leftInView] = useInView();

  useEffect(() => {
    if (leftInView) {
      controls.start("visible");
    }
  }, [controls, leftInView]);

  return (
    <section className="counter">
      <div className="container">
        <div className="counter__wrapper">
          <motion.div
            className="left__side"
            ref={leftRef}
            animate={controls}
            initial="hidden"
            variants={leftVariants}
          >
            <img src={people} alt="people-study" />
          </motion.div>
          <motion.div
            className="right__side"
            ref={leftRef}
            animate={controls}
            initial="hidden"
            variants={rightVariants}
          >
            <h2>Growing Vortex</h2>
            <h2 className="highlight">Community</h2>
            <p>
              With more than 7 years of experience in education and online
              teaching field, we guarantee the best service for test
              preparations and revisions for all popular test systems.
            </p>
            <div className="right__side-item">
              {counterData.map((item, index) => (
                <div className="counteritem__wrapper" key={index}>
                  <CountUp
                    enableScrollSpy={true}
                    start={0}
                    end={item.value}
                    delay={1}
                    prefix={item.prefixValue}
                    suffix={item.suffixValue}
                    className="number"
                  />
                  <h5>{item.title}</h5>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
