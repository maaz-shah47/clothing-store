import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCyowHZ8-4XXH02hD6w5JaC9bjcSrq5bDI",
  authDomain: "shopping-store-6bb23.firebaseapp.com",
  projectId: "shopping-store-6bb23",
  storageBucket: "shopping-store-6bb23.appspot.com",
  messagingSenderId: "657712611004",
  appId: "1:657712611004:web:16cf01d6a58b779f7ddab9"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUser = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  // console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('Error while creating user', error.message)
    }
  }
}
