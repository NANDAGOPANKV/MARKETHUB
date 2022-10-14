import React, { createContext, useContext, useLayoutEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";

export const AuthContextProvider = createContext();
export const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});

  // sign up user
  const SignUp = (email, password, userNameData) => {
    createUserWithEmailAndPassword(auth, email, password);
    return setDoc(doc(db, "users", email), {
      FavoriteContent: [],
      UserData: {
        name: userNameData,
        email,
        password,
      },
    });
  };

  // sign in user
  const Signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  // sign out user
  const SiginOut = () => {
    signOut(auth);
  };
  // user validation
  useLayoutEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContextProvider.Provider value={{ Signin, SignUp, user, SiginOut }}>
      {children}
    </AuthContextProvider.Provider>
  );
};


export const UserAuth = () => {
  return useContext(AuthContextProvider);
}
