import React from 'react';
import { useFetchUsers } from './hooks/hooks';
import './App.css';

const App: React.FC = () => {
  const [users, loading, setLoading] = useFetchUsers();
  console.log('users', users);

  if (loading) return <div>Loading...</div>
  return (
    <div className="App">
      GitHub Usernames
    </div>
  );
}

export default App;
