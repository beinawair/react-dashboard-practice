import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [isActive, setIsActive] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const updateUserName = (name) => {
        setUser(prev => {
            return {...prev, name}
        })
    }

    const value = {
        user,
        setUser,
        password,
        setPassword,
        isActive,
        setIsActive,
        isLoading,
        setIsLoading,
        updateUserName
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}