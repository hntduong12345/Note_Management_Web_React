import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthWrapper = (props) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    email: "",
  });
  const [appLoading, setAppLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        appLoading,
        setAppLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
