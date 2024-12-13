import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState(null);

    const [user, setUser] = useState({
        email: "",
        username: "",
    });

    return (
        <UserDataContext.Provider value={{ user, setUser, selectedLocation, setSelectedLocation }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;
