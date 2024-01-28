'use client';

import React, { useState, createContext, ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextType {
  auth: object;
  setAuth: React.Dispatch<React.SetStateAction<object>>;
}

const AuthContext = createContext<AuthContextType | {}>({});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
