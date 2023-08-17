import {
  About,
  Categories,
  Counter,
  Courses,
  Hero,
  Instructors,
  Partners,
  Plans,
  Questions,
  Subscribe,
  Testimonials,
} from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Counter />
      <Categories />
      <Instructors />
      <Partners />
      <Courses />
      <Testimonials />
      <Plans />
      <Questions />
      <Subscribe />
    </main>
  );
};

export default Home;
