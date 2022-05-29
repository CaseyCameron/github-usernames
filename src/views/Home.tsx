import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from '../services/client';
import DisplayUsers from '../components/Display/DisplayUsers';
import { fetchGitHubProfile } from '../services/fetchGitHubProfile';
import { mungeGitHubData } from '../utils/mungeGitHubData';
import { useFetchUsers } from '../hooks/hooks';
import UserForm from '../components/UserForm/UserForm';

const Home: React.FC = () => {
  const [users, loading, setLoading] = useFetchUsers();
  const [formState, setFormState] = useState('');

  const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const userData = await fetchGitHubProfile(formState);
      const mungedUser = mungeGitHubData(userData);
      console.log('munged', mungedUser);
      const colRef = collection(db, 'users');
      addDoc(colRef, mungedUser);
      setLoading(true);
      setFormState('');
      // set the status message
    } catch (error: any) {
      console.log(error);
      // set the status message
    }
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
