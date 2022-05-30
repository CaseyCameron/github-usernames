import React, { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from '../services/client';
import DisplayUsers from '../components/Display/DisplayUsers';
import fetchGitHubProfile from '../services/fetchGitHubProfile';
import Header from '../components/Display/Header';
import { mungeGitHubData } from '../utils/mungeGitHubData';
import StatusMessage from '../components/Display/StatusMessage';
import UserForm from '../components/UserForm/UserForm';
import { User } from '../utils/types';
import fetchUserData from '../utils/fetchData';

const Home: React.FC = () => {
  const [formState, setFormState] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [users, setUsers] = useState<(User)[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // get users from the database
      try {
        const gitHubUsers = await fetchUserData();
        setUsers(gitHubUsers);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    fetchData();
    setLoading(false);
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const colRef = collection(db, 'users');
    setLoading(true);
    try {
      // fetch the GitHub profile, munge date, return only needed data, then add to db
      const gitHubUser = await fetchGitHubProfile(formState);
      const mungedUser = mungeGitHubData(gitHubUser);
      await addDoc(colRef, mungedUser);

      // refetch the users & set users state to trigger rerender
      const gitHubUsers = await fetchUserData();
      setUsers(gitHubUsers);

      setFormState('');
      setStatusMessage('Success');
      setLoading(false);
    } catch (error) {
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
  w-auto
`
