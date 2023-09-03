import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  return (
    <LoginContext.Provider value={{ auth, setAuth }}>
      {children}
    </LoginContext.Provider>
  );
};

export function useToken() {
  const context = useContext(LoginContext);

  return context;
}

export default LoginContext;
