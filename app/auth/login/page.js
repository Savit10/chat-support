"use client"
import AuthForm from "@/app/components/AuthForm";
import React, {use, useState, useEffect} from "react";
import Navbar from "@/app/components/Navbar";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "@/app/lib/auth";
import { useAuth } from "../../context/authContext";
import { useRouter } from 'next/navigation';

export default function Login () {
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [error, setError] = useState('');
    const { userLoggedIn } = useAuth();

    const router = useRouter();

    useEffect(() => {
        if (userLoggedIn) {
            router.replace('/chat');
            return;
        }
    }, [userLoggedIn, router]);

    const handleLogin = async (user) => {
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(user.email, user.password).catch((error) => {
                setError(error.message);
                setIsSigningIn(false);
            })
        }
    }

    /* const onGoogleSignIn = async () => {
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithGoogle().catch((error) => {
                setError(error.message);
                setIsSigningIn(false);
            })
        }
    } */
    return (
        <div>
            <Navbar page={"Login"} />
            <AuthForm page={"Login"} login={handleLogin} /* google={onGoogleSignIn} */ signingIn={isSigningIn} error={error}/>
            {error && ( <span className='text-red-600 font-bold'>{error} </span>)}
        </div>
    )
}