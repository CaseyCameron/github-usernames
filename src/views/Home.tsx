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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userData = await fetchGitHubProfile(formState);
      const mungedUser = mungeGitHubData(userData);
      const colRef = collection(db, 'users');
      addDoc(colRef, mungedUser);
      setFormState('');
      setStatusMessage('Success');
    } catch (error: any) {
      console.log(error);
      setStatusMessage('Error');
    }
    setLoading(false);
  }

  if (loading) return <div>Loading...</div>
  return (
    <>
      <Header />
      <div className={home}>
        <UserForm formState={formState} setFormState={setFormState} handleSubmit={handleSubmit}/>
        <StatusMessage statusMessage={statusMessage}/>
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
  

