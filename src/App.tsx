import { useState, useEffect, useContext } from "react";
import "./App.css";
import { useScrollTop } from "./hooks/useScrollTop";
//router
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Footer, Header } from "./components";
import {
  Course,
  Home,
  Instructor,
  Loading,
  Login,
  Profile,
  Register,
} from "./pages";
import { AuthContext } from "./context/AuthContext";

export interface ProtectedRouteProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const { isScrolled } = useScrollTop();
  const [isVisible, setIsVisible] = useState(false);
  const { currentUser, isFirstLogin } = useContext(AuthContext);

  //login
  //overenie, ci je user prihlaseny
  const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          {isFirstLogin ? <Loading /> : <Layout />}
        </ProtectedRoute>
      ),

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/courses",
          element: <Course />,
        },
        {
          path: "/instructors",
          element: <Instructor />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  //scroll
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (isScrolled) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isScrolled]);

  return (
    <div style={{ position: "relative" }}>
      <RouterProvider router={router} />
      <button
        id="scrollToTopButton"
        className={isVisible ? "active" : ""}
        onClick={handleTop}
      >
        &#8593;
      </button>
    </div>
  );
}

export default App;
