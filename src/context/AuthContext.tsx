
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { supabase } from '@/integrations/supabase/client';
// import { Session, User, Provider, OAuthResponse, AuthError } from '@supabase/supabase-js';
// import { useToast } from '@/components/ui/use-toast';

// interface AuthContextType {
//   session: Session | null;
//   user: User | null;
//   userProfile: UserProfile | null;
//   isLoading: boolean;
//   signIn: (email: string, password: string) => Promise<{
//     error: Error | null;
//     data: Session | null;
//   }>;
//   signUp: (email: string, password: string, userData?: Record<string, any>) => Promise<{
//     error: Error | null;
//     data: Session | null;
//   }>;
//   signInWithOAuth: (provider: Provider) => Promise<{
//     error: Error | null;
//     data: any;
//   }>;
//   signOut: () => Promise<{ error: Error | null }>;
//   getUserDashboardPath: () => string;
// }

// interface UserProfile {
//   id: string;
//   first_name: string | null;
//   last_name: string | null;
//   user_type: string | null;
//   company_name: string | null;
//   company_size: string | null;
//   avatar_url: string | null;
//   active_resume_id: string | null;
//   created_at: string | null;
//   updated_at: string | null;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [session, setSession] = useState<Session | null>(null);
//   const [user, setUser] = useState<User | null>(null);
//   const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const { toast } = useToast();

//   const fetchUserProfile = async (userId: string) => {
//     try {
//       const { data, error } = await supabase
//         .from('profiles')
//         .select('*')
//         .eq('id', userId)
//         .single();

//       if (error) {
//         console.error('Error fetching user profile:', error);
//         return null;
//       }

//       return data as UserProfile;
//     } catch (error) {
//       console.error('Error in fetchUserProfile:', error);
//       return null;
//     }
//   };

//   const handleSessionChange = async (currentSession: Session | null) => {
//     setSession(currentSession);
//     setUser(currentSession?.user ?? null);
    
//     if (currentSession?.user) {
//       const profile = await fetchUserProfile(currentSession.user.id);
//       setUserProfile(profile);
//     } else {
//       setUserProfile(null);
//     }
    
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     const { data: { subscription } } = supabase.auth.onAuthStateChange(
//       (event, sessionData) => {
//         console.log("Auth state changed:", event, sessionData);
        
//         setTimeout(() => {
//           handleSessionChange(sessionData);
//         }, 0);
//       }
//     );

//     supabase.auth.getSession().then(({ data: { session: sessionData } }) => {
//       console.log("Initial session check:", sessionData);
//       handleSessionChange(sessionData);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   const signIn = async (email: string, password: string) => {
//     setIsLoading(true);
//     try {
//       const result = await supabase.auth.signInWithPassword({ email, password });
      
//       return {
//         data: result.data.session,
//         error: result.error
//       };
//     } catch (error) {
//       setIsLoading(false);
//       return {
//         data: null,
//         error: error as Error
//       };
//     }
//   };

//   const signUp = async (email: string, password: string, userData?: Record<string, any>) => {
//     setIsLoading(true);
//     try {
//       const result = await supabase.auth.signUp({ 
//         email, 
//         password,
//         options: {
//           data: userData,
//           emailRedirectTo: `${window.location.origin}/verification`
//         }
//       });
      
//       if (!result.error) {
//         toast({
//           title: "Verification email sent",
//           description: "Please check your inbox and verify your email.",
//         });
//       }
      
//       return {
//         data: result.data.session,
//         error: result.error
//       };
//     } catch (error) {
//       setIsLoading(false);
//       return {
//         data: null,
//         error: error as Error
//       };
//     }
//   };

//   const signInWithOAuth = async (provider: Provider) => {
//     setIsLoading(true);
//     try {
//       const options: { 
//         redirectTo: string; 
//       } = {
//         redirectTo: `${window.location.origin}/verification`
//       };
      
//       if (provider === 'linkedin_oidc') {
//         (options as any).scopes = 'openid profile email';
//       }
      
//       if (provider === 'google') {
//         (options as any).scopes = 'email profile';
//       }
      
//       const result = await supabase.auth.signInWithOAuth({
//         provider,
//         options
//       });
      
//       return {
//         data: result.data,
//         error: result.error
//       };
//     } catch (error) {
//       setIsLoading(false);
//       return {
//         data: null,
//         error: error as Error
//       };
//     }
//   };

//   const signOut = async () => {
//     setIsLoading(true);
//     try {
//       const result = await supabase.auth.signOut();
      
//       return {
//         error: result.error
//       };
//     } catch (error) {
//       setIsLoading(false);
//       return {
//         error: error as Error
//       };
//     }
//   };

//   const getUserDashboardPath = () => {
//     // Determine which dashboard the user should see based on their user_type
//     if (userProfile) {
//       if (userProfile.user_type === 'company') {
//         return '/company-dashboard';
//       } else if (userProfile.user_type === 'candidate') {
//         return '/job-seeker-dashboard';
//       }
//     }
    
//     // Check user metadata if profile isn't loaded yet
//     if (user?.user_metadata) {
//       const userType = user.user_metadata.user_type;
//       if (userType === 'company') {
//         return '/company-dashboard';
//       } else if (userType === 'candidate') {
//         return '/job-seeker-dashboard';
//       }
//     }
    
//     // Default to a general dashboard if we can't determine the user type
//     return '/dashboard';
//   };

//   const value = {
//     session,
//     user,
//     userProfile,
//     isLoading,
//     signIn,
//     signUp,
//     signInWithOAuth,
//     signOut,
//     getUserDashboardPath
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
