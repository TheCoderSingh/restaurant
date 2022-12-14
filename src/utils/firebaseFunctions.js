import {
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  orderBy
} from 'firebase/firestore';
import { firestore } from '../firebase.config';

// Saving new item
export const saveItem = async data => {
  await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, {
    merge: true
  });
};

// Fetch all food items
export const fetchFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, 'foodItems'), orderBy('id', 'desc'))
  );

  return items.docs.map(doc => doc.data());
};
