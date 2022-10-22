import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../config/firebase";

export const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const singUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  };
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const value = { singUp, login, user, logOut,googleLogin, loading };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(unsubscribe);
      
      setLoading(false);
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </div>
  );
};

export default AuthContext;
