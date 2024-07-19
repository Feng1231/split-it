"use client";

import supabase from '@/config/supabaseClient';
import { Session } from '@supabase/supabase-js';
import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type AuthData = {
  session: Session | null;
  profile: any;
  loading: boolean;
};

const AuthContext = createContext<AuthData>({
  session: null,
  loading: true,
  profile: null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      // console.log(session) //session debugging
      setSession(session);
      console.log(session)

      if (session) {
        // fetch profile
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setProfile(data || null);
        console.log(data) //profile debugging
      }

      setLoading(false);
    };

    fetchSession();
    supabase.auth
      .onAuthStateChange((_event: any, session: SetStateAction<Session | null>) => {
      setSession(session);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, loading, profile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);