import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { MiniMenuContextProvider } from "./context/MiniMenuContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <MiniMenuContextProvider>
      <App />
    </MiniMenuContextProvider>
  </AuthContextProvider>
);
