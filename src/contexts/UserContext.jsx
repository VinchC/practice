import PropTypes from "prop-types";

import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isOnline, setIsOnline] = useState(false);
  return (
    <UserContext.Provider value={{ isOnline, setIsOnline }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export const useTheme = () => useContext(UserContext);
