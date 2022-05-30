import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from '../services/client';
import DisplayUsers from '../components/Display/DisplayUsers';
import { fetchGitHubProfile } from '../services/fetchGitHubProfile';
import Header from '../components/Display/Header';
import { mungeGitHubData } from '../utils/mungeGitHubData';
import { useFetchUsers } from '../hooks/hooks';
import UserForm from '../components/UserForm/UserForm';
import StatusMessage from '../components/Display/StatusMessage';

const Home: React.FC = () => {
  const [users, loading, setLoading] = useFetchUsers();
  const [formState, setFormState] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

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
    <>
      <Header />
      <div className={home}>
        <UserForm formState={formState} setFormState={setFormState} handleSubmit={handleSubmit}/>
        <StatusMessage />
        <DisplayUsers users={users}/>
      </div>
    </>
  );
}

export default Home;

const home = `
  flex
  flex-col
  justify-center
  mx-5
`
  

