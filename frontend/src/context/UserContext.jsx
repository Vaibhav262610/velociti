import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        email: "",
        username: "",
    });
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedRide, setSelectedRide] = useState(null);
    const [profile, setProfile] = useState(null)



    return (
        <UserDataContext.Provider value={{ user, setUser, selectedLocation, setSelectedLocation, selectedRide, setSelectedRide, profile, setProfile }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;
