"use client"

import IndexPage from "@/components/group/pages/index";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { useAuth } from '@/providers/AuthProvider';

const GroupPage = () => {
    const router = useRouter();
    const { session, loading } = useAuth();

    useEffect(() => {
        if (!loading) {
          if (!session) {
            router.push('/signIn');
          }
        }
      }, [loading, session, router]);

    return (
        <div>
        <IndexPage />
        </div>
    );
};

export default GroupPage;