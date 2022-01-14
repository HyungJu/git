import React, { Dispatch, PropsWithChildren, useEffect, useState } from 'react';

export interface IAccountContext {
  isProcessing: boolean;
  isLogined: boolean;
  user: any;
  setToken: Dispatch<any>;
}

export interface IUser {
  username: string;
}

export const AccountContext = React.createContext<IAccountContext>({
  isProcessing: false,
  isLogined: false,
  user: {},
  setToken: () => {},
});

export const AccountProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isProcessing, setProcessing] = useState(false);
  const [isLogined, setLogined] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    setProcessing(true);
    setLogined(true);
    setUser({ username: '형쥬' });
  }, [token]);

  return (
    <AccountContext.Provider value={{ isProcessing, isLogined, user, setToken }}>
      {children}
    </AccountContext.Provider>
  );
};
