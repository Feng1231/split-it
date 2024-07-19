"use client"

import SignInForm from "@/components/auth/organisms/SignInForm";
import { useRouter } from 'next/navigation'; 
import { useAuth } from '@/providers/AuthProvider';
import { useEffect } from "react";

const SignInPage = () => {
    const router = useRouter();
    const { session, loading } = useAuth();

    useEffect(() => {
        if (!loading) {
            if (session) {
                router.push('/group');
            }
        }
    }, [loading, session, router]);
    return (
        <div>
            <title>Sign In</title>
        <SignInForm />
        </div>
    );
};

export default SignInPage;