"use client"
import React, {useEffect} from "react";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from 'next/navigation';
import { doSignOut } from "@/app/lib/auth";

export default function Logout() {
    const { userLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (userLoggedIn) {
            doSignOut();
        }
        router.replace('/auth/login');
    }, [userLoggedIn, router]);

    return null;
}
