
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from '@/components/ui/use-toast';

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
  signUp: (email: string, password: string, role: 'hr' | 'jobseeker') => Promise<{ error: Error | null; data: any }>;
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
      const storedUsers = localStorage.getItem('zordie_users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Find user by email
      const foundUser = users.find((u: any) => u.email === email);
      
      if (!foundUser) {
        return { error: new Error('User not found'), data: null };
      }
      
      // For demo purposes, we're not really checking passwords
      const mockUser = {
        id: foundUser.id,
        displayName: foundUser.displayName,
        email: foundUser.email,
        role: foundUser.role
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
  const signUp = async (email: string, password: string, role: 'hr' | 'jobseeker') => {
    setIsLoading(true);
    try {
      // Get existing users or initialize empty array
      const storedUsers = localStorage.getItem('zordie_users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Check if user already exists
      if (users.some((user: any) => user.email === email)) {
        return { error: new Error('User already exists'), data: null };
      }
      
      // Create new user
      const newUser = {
        id: 'user-' + Math.random().toString(36).substring(2, 9),
        displayName: email.split('@')[0],
        email,
        role
      };
      
      // Add to users collection
      users.push(newUser);
      localStorage.setItem('zordie_users', JSON.stringify(users));
      
      // Set as current user
      localStorage.setItem('zordie_user', JSON.stringify(newUser));
      setUser(newUser);
      
      return { error: null, data: newUser };
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
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
    return { error: null };
  };

  // Get dashboard path based on user role
  const getUserDashboardPath = () => {
    if (!user) return '/login';
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
