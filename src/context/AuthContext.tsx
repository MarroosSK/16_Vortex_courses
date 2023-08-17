import { createContext, useEffect, useState } from "react";
import { ChildTypes } from "../types/types";

// User object type
export interface User {
  name: string;
  password: string;
}

// Auth context type
export interface AuthContextType {
  userDetails: User;
  setUserDetails: React.Dispatch<
    React.SetStateAction<{ name: string; password: string }>
  >;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: () => void;
  logout: () => void;
  isFirstLogin: boolean;
  setIsFirstLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultState = {
  userDetails: { name: "", password: "" },
  setUserDetails: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  login: () => {},
  logout: () => {},
  isFirstLogin: false,
  setIsFirstLogin: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultState);

export const AuthContextProvider = ({ children }: ChildTypes) => {
  const [userDetails, setUserDetails] = useState({
    name: "demo",
    password: "demo",
  });
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("userVortex");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isFirstLogin, setIsFirstLogin] = useState(false);

  const login = () => {
    setCurrentUser(userDetails);
    setIsFirstLogin(true);
    console.log(currentUser);
  };
  const logout = () => {
    setCurrentUser(null);
    setIsFirstLogin(false);
  };

  useEffect(() => {
    localStorage.setItem("userVortex", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        userDetails,
        setUserDetails,
        currentUser,
        setCurrentUser,
        login,
        logout,
        isFirstLogin,
        setIsFirstLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
