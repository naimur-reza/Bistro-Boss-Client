import React, { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { app } from "../src/firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  create user with email and password
  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google Popup
  const Provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    return signInWithPopup(auth, Provider);
  };

  //  log Out
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  // update user profile
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then((res) => {})
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        axios
          .post("http://localhost:3000/jwt", { email: user.email })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUser,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
