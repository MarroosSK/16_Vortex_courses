import { useState, createContext } from "react";

interface MiniMenuInterface {
  miniMenu: boolean;
  setMiniMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenuToggle: () => void;
}

const defaultValues = {
  miniMenu: false,
  setMiniMenu: () => {},
  handleMenuToggle: () => {},
};

export const MiniMenuContext = createContext<MiniMenuInterface>(defaultValues);

export const MiniMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [miniMenu, setMiniMenu] = useState(false);
  const handleMenuToggle = () => {
    setMiniMenu(!miniMenu);
  };
  return (
    <MiniMenuContext.Provider
      value={{ miniMenu, setMiniMenu, handleMenuToggle }}
    >
      {children}
    </MiniMenuContext.Provider>
  );
};
