import React, { useState } from 'react';
import { collection } from 'firebase/firestore/lite';
import { db } from '../services/client';
import DisplayUsers from '../components/Display/DisplayUsers';
import { useFetchUsers } from '../hooks/hooks';
import UserForm from '../components/UserForm/UserForm';

const Home: React.FC = () => {
  const [users, loading, setLoading] = useFetchUsers();
  const [formState, setFormState] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('clicked');
    // add username to db here
    // hit GitHub api
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
