import { createContext, useContext, useState } from "react";

type AuthState = { authenticated: boolean | null; username: string | null };

interface AuthProps {
  authState: AuthState;
  onLogin: (username: string, password: string) => void;
  onLogout: () => void;
}

const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<AuthState>({
    authenticated: null,
    username: null,
  });
  const login = (username: string, password: string) => {
    setAuthState({ authenticated: true, username: username });
  };

  const logout = async () => {
    setAuthState({
      authenticated: false,
      username: null,
    });
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
