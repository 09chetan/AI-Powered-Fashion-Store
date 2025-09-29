import React, { createContext } from 'react';

export const authDataContext = createContext();

function Authcontext({ children }) {
    const serverUrl = "http://localhost:3030";

    return (
        <authDataContext.Provider value={{ serverUrl }}>
            {children}
        </authDataContext.Provider>
    );
}

export default Authcontext;
