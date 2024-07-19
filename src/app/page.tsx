"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { useAuth } from '@/providers/AuthProvider';

export default function Home() {
  const router = useRouter();
  const { session, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!session) {
        router.push('/signIn');
      } else {
        router.push('/group');
      }
    }
  }, [loading, session, router]);

  // Render loading indicator while session is being checked
  if (loading) {
    return <div>Loading...</div>;
  }

  return null; // Return nothing as redirection will handle page display
}
