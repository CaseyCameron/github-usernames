import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../services/client';
import { User } from './types';

const fetchUserData = async () => {
  const colRef = collection(db, 'users');
    let userData: User[] = [];
    try {        
      const snapshot = await getDocs(colRef);
      snapshot.docs.forEach(doc => {
        const user = doc.data() as User;
        userData.push(user);
      });
    } catch (error: any) {
      console.log(error.message);
    }
    return userData;
}

export default fetchUserData;
