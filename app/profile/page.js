'use client'
import React from "react";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from 'next/navigation';
import Navbar from "@/app/components/Navbar";
import Box from '@mui/material/Box';

export default function Profile() {
    const { currentUser, userLoggedIn } = useAuth();
    const router = useRouter();
    if (!userLoggedIn) {
        router.replace('/auth/login');
        return null;
    }
    return (
        <div>
            <Box>
                <Navbar page={"Profile"}/>
                <Box width="100%" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <h1>Profile</h1>
                    <p>Email: {currentUser.email}</p>
                </Box>
            </Box>
        </div>
    );
}