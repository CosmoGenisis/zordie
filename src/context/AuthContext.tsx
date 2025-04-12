
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Session, User } from '@supabase/supabase-js';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{
    error: Error | null;
    data: Session | null;
  }>;
  signUp: (email: string, password: string, userData?: Record<string, any>) => Promise<{
    error: Error | null;
    data: Session | null;
  }>;
  signOut: () => Promise<{ error: Error | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, sessionData) => {
        console.log("Auth state changed:", event, sessionData);
        setSession(sessionData);
        setUser(sessionData?.user ?? null);
        setIsLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: sessionData } }) => {
      console.log("Initial session check:", sessionData);
      setSession(sessionData);
      setUser(sessionData?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const result = await supabase.auth.signInWithPassword({ email, password });
      setIsLoading(false);
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
          data: userData
        }
      });
      setIsLoading(false);
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

  const signOut = async () => {
    setIsLoading(true);
    try {
      const result = await supabase.auth.signOut();
      setIsLoading(false);
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
    isLoading,
    signIn,
    signUp,
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
