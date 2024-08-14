"use client"
import React from "react";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from 'next/navigation';
import { doSignOut } from "@/app/lib/auth";

export default function Logout() {
    const { userLoggedIn } = useAuth();
    const router = useRouter();

    if (userLoggedIn) {
        doSignOut();
    }
    router.replace('/auth/login');
    return null;
}
