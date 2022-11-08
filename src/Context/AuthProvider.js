import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext(app);
const auth = getAuth();
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // Google authentication 
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    // For log in and user create get data from outside
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    // create user by using email and password 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login system 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    // Logout system 
    const userSignOut = () => {
        setLoading(true);
        localStorage.removeItem("photography-token")
        return signOut(auth);
    }
    const authInfo = { user, providerLogin, userSignOut, createUser, signIn,loading,updateUserProfile };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;