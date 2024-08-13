"use client"
import AuthForm from "@/app/components/AuthForm";
import React from "react";
import Navbar from "@/app/components/Navbar";

export default function Login () {
    return (
        <div>
            <Navbar page={"Login"}/>
            <AuthForm />
        </div>
    )
}