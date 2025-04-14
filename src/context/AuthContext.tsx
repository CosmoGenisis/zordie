
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User, Provider } from '@supabase/supabase-js';
import { useToast } from '@/components/ui/use-toast';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  userProfile: UserProfile | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{
    error: Error | null;
    data: Session | null;
  }>;
  signUp: (email: string, password: string, userData?: Record<string, any>) => Promise<{
    error: Error | null;
    data: Session | null;
  }>;
  signInWithOAuth: (provider: Provider) => Promise<{
    error: Error | null;
    data: any;
  }>;
  signOut: () => Promise<{ error: Error | null }>;
}

interface UserProfile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  user_type: string | null;
  company_name: string | null;
  company_size: string | null;
  avatar_url: string | null;
  active_resume_id: string | null;
  created_at: string | null;
  updated_at: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Fetch user profile from database
  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }

      return data as UserProfile;
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
      return null;
    }
  };

  // Update user session and profile
  const handleSessionChange = async (currentSession: Session | null) => {
    setSession(currentSession);
    setUser(currentSession?.user ?? null);
    
    if (currentSession?.user) {
      // Fetch user profile after session is updated
      const profile = await fetchUserProfile(currentSession.user.id);
      setUserProfile(profile);
    } else {
      setUserProfile(null);
    }
    
    setIsLoading(false);
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, sessionData) => {
        console.log("Auth state changed:", event, sessionData);
        
        // Use setTimeout to avoid potential deadlocks with Supabase auth
        setTimeout(() => {
          handleSessionChange(sessionData);
        }, 0);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: sessionData } }) => {
      console.log("Initial session check:", sessionData);
      handleSessionChange(sessionData);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await supabase.auth.signInWithPassword({ email, password });
      
      // handleSessionChange will be triggered by onAuthStateChange
      
      return {
        data: result.data.session,
        error: result.error
      };
    } catch (error) {
      setIsLoading(false);
      return {
        data: null,
        error: error as Error
      };
    }
  };

  const signUp = async (email: string, password: string, userData?: Record<string, any>) => {
    setIsLoading(true);
    try {
      const result = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          data: userData,
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      });
      
      // handleSessionChange will be triggered by onAuthStateChange
      
      if (!result.error) {
        toast({
          title: "Verification email sent",
          description: "Please check your inbox and verify your email.",
        });
      }
      
      return {
        data: result.data.session,
        error: result.error
      };
    } catch (error) {
      setIsLoading(false);
      return {
        data: null,
        error: error as Error
      };
    }
  };

  const signInWithOAuth = async (provider: Provider) => {
    setIsLoading(true);
    try {
      // For LinkedIn, ensure we're requesting the right scopes
      const options = provider === 'linkedin_oidc' 
        ? {
            redirectTo: `${window.location.origin}/dashboard`,
            scopes: 'openid profile email'
          }
        : {
            redirectTo: `${window.location.origin}/dashboard`
          };
      
      const result = await supabase.auth.signInWithOAuth({
        provider,
        options
      });
      
      // For OAuth, we don't set isLoading to false here because the page will redirect
      
      return {
        data: result.data,
        error: result.error
      };
    } catch (error) {
      setIsLoading(false);
      return {
        data: null,
        error: error as Error
      };
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      const result = await supabase.auth.signOut();
      
      // handleSessionChange will be triggered by onAuthStateChange
      
      return {
        error: result.error
      };
    } catch (error) {
      setIsLoading(false);
      return {
        error: error as Error
      };
    }
  };

  const value = {
    session,
    user,
    userProfile,
    isLoading,
    signIn,
    signUp,
    signInWithOAuth,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
