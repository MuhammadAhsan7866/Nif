import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add isLoading state
    const router = useRouter();

    const updateLoggedInUser = (obj) => {
        localStorage.setItem('user', JSON.stringify(obj));
        setUser(obj);
    }

    useEffect(() => {
        const loggedUser = localStorage.getItem('user');
        const parsedUser = JSON.parse(loggedUser);
        if (parsedUser) {
            setUser(parsedUser);
        }
        setIsLoading(false); 
    }, []);

    useEffect(() => {
        if (!user && !isLoading) { // Only redirect if user is not logged in and loading is complete
            router.push('/AdminLogin');
        }
    }, [user, isLoading, router]);
    

    return (
        <AuthContext.Provider value={{ user, setUser, updateLoggedInUser }}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
