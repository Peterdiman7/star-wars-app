import { createContext, useContext, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useState } from "react";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return(
        <UserContext.Provider value={{ createUser, signIn, user }}>
            {children}
        </UserContext.Provider>
    )    
}

export const UserAuth = () => {
    return useContext(UserContext);
}