import { useContext, FormEvent } from "react";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import nftIcon from "../../assets/cyclone.png";
import bgVideo from "../../assets/working.mp4";

const Login = () => {
  const navigate = useNavigate();

  const { userDetails, setUserDetails, login } = useContext(AuthContext);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();

    navigate("/");
  };
  return (
    <div className="login">
      {/* video */}
      <video className="login__background-video" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="login__wrapper">
        <div className="logo__box">
          <img src={nftIcon} alt="" />
          <h5>Vortex</h5>
        </div>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login__form">
          <input
            type="text"
            placeholder="Username"
            value={userDetails?.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={userDetails?.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
          />
          <button type="submit" className="primary__btn">
            Login
          </button>
          <div className="register__box">
            <p>
              No account yet?{" "}
              <span style={{ color: "#fff" }}>
                <Link to="/register">Sign Up</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
