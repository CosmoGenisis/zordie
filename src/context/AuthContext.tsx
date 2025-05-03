
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define types for our context
interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  role: 'hr' | 'jobseeker';
}

interface AuthContextType {
  user: UserProfile | null;
  session: any | null;
  userProfile: any | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null; data: any }>;
  signUp: (email: string, password: string) => Promise<{ error: Error | null; data: any }>;
  signInWithOAuth: () => Promise<{ error: Error | null; data: any }>;
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
  getUserDashboardPath: () => '/dashboard-selector'
});

// For demonstration, we'll use local storage to simulate auth state
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('zordie_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse stored user:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Demo sign in function (normally would connect to a backend)
  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // For demo purposes, we'll consider any email/password as valid
      const mockUser = {
        id: 'user-' + Math.random().toString(36).substring(2, 9),
        displayName: email.split('@')[0],
        email,
        role: email.includes('hr') ? 'hr' as const : 'jobseeker' as const
      };
      localStorage.setItem('zordie_user', JSON.stringify(mockUser));
      setUser(mockUser);
      return { error: null, data: mockUser };
    } catch (error: any) {
      return { error, data: null };
    } finally {
      setIsLoading(false);
    }
  };

  // Demo sign up function
  const signUp = async (email: string, password: string) => {
    return signIn(email, password); // For demo, signup is same as signin
  };

  // Mock OAuth sign in
  const signInWithOAuth = async () => {
    setIsLoading(true);
    try {
      const mockUser = {
        id: 'oauth-user-' + Math.random().toString(36).substring(2, 9),
        displayName: 'OAuth User',
        email: 'oauth@example.com',
        role: 'jobseeker' as const
      };
      localStorage.setItem('zordie_user', JSON.stringify(mockUser));
      setUser(mockUser);
      return { error: null, data: mockUser };
    } catch (error: any) {
      return { error, data: null };
    } finally {
      setIsLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    localStorage.removeItem('zordie_user');
    setUser(null);
    return { error: null };
  };

  // Get dashboard path based on user role
  const getUserDashboardPath = () => {
    if (!user) return '/dashboard-selector';
    return user.role === 'hr' ? '/dashboard' : '/job-seeker-dashboard';
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        userProfile,
        isLoading,
        signIn,
        signUp,
        signInWithOAuth,
        signOut,
        getUserDashboardPath
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Export the hook that will be used by components
export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};
