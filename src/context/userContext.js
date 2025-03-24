'use client';

import { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext(null);

// Custom hook for easy access
export const useUser = () => useContext(UserContext);

// Provider component
export function UserProvider({ children }) {
  const [userCurrent, setUserCurrent] = useState(null);

  return (
    <UserContext.Provider value={{ userCurrent, setUserCurrent }}>
      {children}
    </UserContext.Provider>
  );
}
