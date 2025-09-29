import React, { createContext, useState, useEffect, useContext } from 'react';
import { authDataContext } from './authcontext.jsx';
import axios from 'axios';

export const userDataContext = createContext();

function UserContext({ children }) {
    const [userData, setUserData] = useState("");
    const { serverUrl } = useContext(authDataContext); // ✅ Correct

    const getCurrentUser = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/user/getcurrentuser", { withCredentials: true });
            setUserData(result.data);
        } catch (error) {
            setUserData(null);
            console.log(error);
        }
    };

    useEffect(() => {
        getCurrentUser();
    }, []);

    return (
        <userDataContext.Provider value={{ userData, setUserData, getCurrentUser }}>
            {children}
        </userDataContext.Provider>
    );
}

export default UserContext;
