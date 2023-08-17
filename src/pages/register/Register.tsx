import "./Register.css";
import { Link } from "react-router-dom";
import nftIcon from "../../assets/cyclone.png";
import bgVideo from "../../assets/working.mp4";

const Register = () => {
  return (
    <div className="register">
      {/* video */}
      <video className="register__background-video" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="register__wrapper">
        <div className="logo__box">
          <img src={nftIcon} alt="" />
          <h5>Vortex</h5>
        </div>
        <h2>Register</h2>
        <form className="register__form">
          <input type="text" placeholder="Username (disabled)" disabled />
          <input type="text" placeholder="Email (disabled)" disabled />
          <input type="password" placeholder="Password (disabled)" disabled />
          <button type="submit" className="primary__btn" disabled>
            Register
          </button>
          <div className="login__box">
            <p>
              Have an account?{" "}
              <span style={{ color: "#fff" }}>
                <Link to="/login">Sign In</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
