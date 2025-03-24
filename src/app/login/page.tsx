'use client';

import { useUser } from '@/context/userContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [user, setUser] = useState();

  const { userCurrent, setUserCurrent } = useUser();

  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setError(null);
    setSuccessMessage(null);

    try {
      const res = await axios.post(
        'https://node-nature.onrender.com/api/v1/users/login',
        {
          email,
          password,
        }
      );

      setSuccessMessage('Account created successfully!');
      console.log('User signed up:', res.data);
      setUser(res.data.data.user);
      setUserCurrent(res.data.data.user);

      router.push('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed.');
      console.error('Signup error:', err);
    }
  };

  return (
    <div className='max-w-md mx-auto my-16 p-8 bg-white rounded shadow-md'>
      <h2 className='text-3xl text-center text-natours-gray-dark-3 font-bold mb-8'>
        Log into your account
      </h2>
      <form className='flex flex-col gap-6' onSubmit={handleSignIn}>
        <div className='flex flex-col gap-2'>
          <label className='text-natours-gray-dark-2 text-base' htmlFor='email'>
            Email address
          </label>
          <input
            className='py-3 px-4 border border-natours-gray-light-2 bg-natours-gray-light-1 rounded focus:outline-none focus:ring-2 focus:ring-natours-green'
            type='email'
            id='email'
            placeholder='you@example.com'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label
            className='text-natours-gray-dark-2 text-base'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='py-3 px-4 border border-natours-gray-light-2 bg-natours-gray-light-1 rounded focus:outline-none focus:ring-2 focus:ring-natours-green'
            type='password'
            id='password'
            placeholder='••••••••'
            required
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type='submit' className='btn btn--green w-full'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
