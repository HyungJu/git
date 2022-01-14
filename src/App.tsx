import React from 'react';
import { AccountProvider } from './hooks/AccountProvider';
import GithubLogin from './components/GithubLogin';

function App() {
  return (
    <AccountProvider>
      <GithubLogin />
    </AccountProvider>
  );
}

export default App;
