import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../services/client';
import { User } from '../utils/types';

const useFetchUsers = (): [User[], boolean, Function] => {
  const [users, setUsers] = useState<(User)[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const colRef = collection(db, 'users');
    let userData: any[] = [];
    getDocs(colRef)
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        const user = doc.data() as User;
        userData.push(user);
      })
      setUsers(userData);
      setLoading(false);
    })
      .catch(err => console.log(err.message));
      // eventually send this as status message
  }, [loading]);
  return [users, loading, setLoading];
};

export { useFetchUsers };
