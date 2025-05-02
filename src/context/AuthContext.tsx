
import { createContext, useContext } from 'react';

// Create a minimal interface for the auth context with empty functions
interface AuthContextType {
  user: null;
  session: null;
  userProfile: null;
  isLoading: boolean;
  signIn: () => Promise<{ error: Error | null; data: null }>;
  signUp: () => Promise<{ error: Error | null; data: null }>;
  signInWithOAuth: () => Promise<{ error: Error | null; data: null }>;
  signOut: () => Promise<{ error: null }>;
  getUserDashboardPath: () => string;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  userProfile: null,
  isLoading: false,
  signIn: async () => ({ error: null, data: null }),
  signUp: async () => ({ error: null, data: null }),
  signInWithOAuth: async () => ({ error: null, data: null }),
  signOut: async () => ({ error: null }),
  getUserDashboardPath: () => '/dashboard'
});

// Export the hook that will be used by components
export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

// No need for an AuthProvider since authentication has been removed
