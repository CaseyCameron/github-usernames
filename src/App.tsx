import React from 'react';
import { useFetchUsers } from './hooks/hooks';
import DisplayUsers from './components/Display/DisplayUsers';
import './App.css';

const App: React.FC = () => {
  const [users, loading, setLoading] = useFetchUsers();
  console.log('users', users);

  if (loading) return <div>Loading...</div>
  return (
    <div className="App">
      <h1>GitHub Usernames</h1>
      <DisplayUsers users={users}/>
    </div>
  );
}

export default App;
