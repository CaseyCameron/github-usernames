import React, { useState } from 'react';
import { useFetchUsers } from './hooks/hooks';
import DisplayUsers from './components/Display/DisplayUsers';
import UserForm from './components/UserForm/UserForm';
import './App.css';

const App: React.FC = () => {
  const [users, loading, setLoading] = useFetchUsers();
  const [formState, setFormState] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('clicked');
    // add username to db here
  }

  if (loading) return <div>Loading...</div>
  return (
    <div className="App">
      <h1>GitHub Usernames</h1>
      <UserForm formState={formState} setFormState={setFormState} handleSubmit={handleSubmit}/>
      <span>Status Message Will Go Here</span>
      <DisplayUsers users={users}/>
    </div>
  );
}

export default App;
