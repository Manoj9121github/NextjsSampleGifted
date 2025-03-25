"use client"


import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
const RegPage = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }
    
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            confirmPassword,
        };
    
        try {
            const response = await fetch('http://localhost:3002/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
    
            // Log the response status and body
            console.log('Response status:', response.status);
            const responseBody = await response.text(); // Get the response body
            console.log('Response body:', responseBody);
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            setMessage('Registration successfully done!');
            // Clear the form
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Failed to send data:', error);
            setMessage('Failed to submit data. Please try again.');
        }
    };
    
  return (
    <div>
        <div className="w-[300px] h-[500px] bg-white shadow-lg rounded-lg p-4 mx-auto mt-20">
            <h1 className='text-center text-3xl'>Registration</h1>
        
        
        
        <form onSubmit={handleSubmit}>
        <Label className='mt-3'>Enter FirstName:</Label>
        <Input
         className='mt-2'
         type='text'
         placeholder='enter first name'
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
         
         />

        <Label className='mt-3'>Enter LastName:</Label>
        <Input className='mt-2'
        type='text'
        value={lastName}
        placeholder='enter last name'
        onChange={(e)=>setLastName(e.target.value)}
        />



        <Label className='mt-4' htmlFor="email">Enter Email :</Label>
        <Input
        type='text'
        placeholder='enter email'
        value={email}
        className='mt-2'
        onChange={(e) => setEmail(e.target.value)}
        required
         />

        <Label className='mt-4' htmlFor="password">Enter Password :</Label>
        <Input className='mt-2'
        placeholder='enter password'
        type='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />

        <Label className='mt-4' htmlFor="password">Enter Confirm Password :</Label>
        <Input className='mt-2'
        placeholder='enter confirm password'
        type='password'
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
        />
        
        <div className='text-center mt-4'>
            <Button type='submit'>Submit</Button>
        </div>
        </form>

        {message && <p>{message}</p>}

      
    </div>
    
      
    </div>
  )
}

export default RegPage
