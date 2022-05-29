import React, { useState } from 'react';
import { collection } from 'firebase/firestore/lite';
import { db } from '../services/client';
import DisplayUsers from '../components/Display/DisplayUsers';
import { useFetchUsers } from '../hooks/hooks';
import UserForm from '../components/UserForm/UserForm';
import { fetchGitHubProfile } from '../services/fetchGitHubProfile';

const Home: React.FC = () => {
  const [users, loading, setLoading] = useFetchUsers();
  const [formState, setFormState] = useState('');

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const user = await fetchGitHubProfile(formState);
    console.log('user', user);
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

export default Home;
