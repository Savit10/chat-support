"use client"
import React, { useState } from "react"
import Navbar from "./components/Navbar"
import { AuthProvider } from "./context/authContext"


export default function Home() {
    return (
        <AuthProvider>
        <Navbar page={"Home"}/>
        </AuthProvider>)
};
