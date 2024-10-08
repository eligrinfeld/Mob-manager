import { AuthProvider } from 'react-admin';

export const authProvider: AuthProvider = {
    login: ({ username, password }) =>  {
        // Implement your login logic here
        return Promise.resolve();
    },
    logout: () => {
        // Implement your logout logic here
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
    getIdentity: () => Promise.resolve(),
};