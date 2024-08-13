"use client"
import AuthForm from "@/app/components/AuthForm";
import React from "react";

export default function Register() {
  return (
    <div>
      <Navbar page={"Register"}/>
      <AuthForm />
    </div>
  );
}