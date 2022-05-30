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
  const [users, setUsers] = useState<(User)[]>([]);
  const [statusMessage, setStatusMessage] = useState<string>('');

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
  }, [loading]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const colRef = collection(db, 'users');
    try {
      // try to fetch the GitHub profile, munge the date, then add
      const userData = await fetchGitHubProfile(formState);
      const mungedUser = mungeGitHubData(userData);
      await addDoc(colRef, mungedUser);

      // refetch the users & set users state to trigger rerender
      const gitHubUsers = await fetchUserData();
      setUsers(gitHubUsers);

      setFormState('');
      setStatusMessage('Success');
    } catch (error) {
      setStatusMessage('Error');
    }
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
