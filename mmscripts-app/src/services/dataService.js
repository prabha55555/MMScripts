// Example service to fetch books from Firebase
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

export const getBooksFromFirebase = async () => {
  try {
    const booksCollection = collection(db, 'books');
    const booksSnapshot = await getDocs(booksCollection);
    const booksList = booksSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return booksList;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const getFeaturedBooks = async () => {
  try {
    const booksCollection = collection(db, 'books');
    const q = query(booksCollection, where('featured', '==', true));
    const booksSnapshot = await getDocs(q);
    const booksList = booksSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return booksList;
  } catch (error) {
    console.error('Error fetching featured books:', error);
    return [];
  }
};

// Example service to fetch articles from Firebase
export const getArticlesFromFirebase = async () => {
  try {
    const articlesCollection = collection(db, 'articles');
    const q = query(articlesCollection, orderBy('createdAt', 'desc'));
    const articlesSnapshot = await getDocs(q);
    const articlesList = articlesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return articlesList;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

// Example service to fetch achievements from Firebase
export const getAchievementsFromFirebase = async () => {
  try {
    const achievementsCollection = collection(db, 'achievements');
    const q = query(achievementsCollection, orderBy('order', 'asc'));
    const achievementsSnapshot = await getDocs(q);
    const achievementsList = achievementsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return achievementsList;
  } catch (error) {
    console.error('Error fetching achievements:', error);
    return [];
  }
};
