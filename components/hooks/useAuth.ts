import React, { SetStateAction, useContext } from 'react';
import AuthContext, { AuthContextType } from './useAuthContext';

const useAuth = () => {
  return useContext(AuthContext);
}

export default useAuth;