import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../services/client';
import { User } from '../utils/types';
import { mungeDate } from '../utils/mungeGitHubData';

const useFetchUsers = (): [User[], boolean, Function] => {
  const [users, setUsers] = useState<(User)[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const colRef = collection(db, 'users');
    let userData: User[] = [];
    const fetchData = async () => {
      try {        
        const snapshot = await getDocs(colRef);
        snapshot.docs.forEach(doc => {
          const user = doc.data() as User;
          // user.created_at = mungeDate(user.created_at);
          userData.push(user);
        });
        setUsers(userData);
      } catch (error: any) {
        console.log(error.message);
      }
    }
    fetchData();
    setLoading(false);
  }, [loading]);
  return [users, loading, setLoading];
};

export { useFetchUsers };
