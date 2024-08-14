"use client"
import AuthForm from "@/app/components/AuthForm";
import Navbar from "@/app/components/Navbar";
import { doCreateUserWithEmailAndPassword } from "@/app/lib/auth";
import React, {useState} from "react";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from 'next/navigation';

export default function Register() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const { userLoggedIn } = useAuth();
  const router = useRouter();

  if (userLoggedIn) {
    router.replace('/chat'); // Redirect to /chat page
    return null; // Return null to prevent further rendering
  }

  const handleRegister = async (user) => {
    if (!isRegistering) {
        setIsRegistering(true);
        await doCreateUserWithEmailAndPassword(user.email, user.password).catch((error) => {
            setError(error.message);
            setIsSigningIn(false);
        })
    }
  }

  return (
    <div>
      <Navbar page={"Register"}/>
      <AuthForm page={"Register"} register={handleRegister} registering={isRegistering} error={error}/>
    </div>
  );
}