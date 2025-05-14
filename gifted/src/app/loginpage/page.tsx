"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const LoginSubmit = async (e: FormEvent) =>{
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3010/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const message = await response.text();
            setMessage(message);
            router.push('/giftarticles'); 
            alert('login successful')
        } else {
            const errorMessage = await response.text();
            setMessage(errorMessage); // Error message
        }
    } catch (error) {
        setMessage('Network error, please try again later.');
        console.error('Error:', error);
    }
    }
  return (
    <div className="bg-slate-800 p-60">
      <div className="w-[300px] h-[400px] bg-white shadow-lg rounded-lg p-4 mx-auto mt-20">
        <h1 className="text-3xl text-center text-blue-400">Login</h1>
        <form onSubmit={LoginSubmit}>
        <Label className="mt-10" htmlFor="email">
          Email :
        </Label>
        <Input type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
         className="mt-2" />

        <Label className="mt-4" htmlFor="password">
          Password :
        </Label>
        <Input 
        type="password" 
        className="mt-2" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <div className="text-center mt-4">
          <Button>Login</Button>
        </div>

        
        <div className="mt-4 text-center">
          <Link className="text-xl text-orange-400 " href={"/registerpage"}>Click to Register</Link>
        </div>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
