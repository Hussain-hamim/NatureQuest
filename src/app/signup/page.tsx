'use client';

import { useUser } from '@/context/userContext';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [user, setUser] = useState();

  const { userCurrent, setUserCurrent } = useUser();

  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setError(null);
    setSuccessMessage(null);

    try {
      const res = await axios.post(
        // 'http://localhost:8000/api/v1/users/signup',
        'https://node-nature.onrender.com/api/v1/users/signup',
        {
          name,
          email,
          password,
          passwordConfirm,
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
        Create your account!
      </h2>
      {error && <p className='text-red-500'>{error}</p>}
      {user && (
        <p className='text-green-500'>
          {user.name} Account created successfully!
        </p>
      )}
      <form className='flex flex-col gap-6' onSubmit={handleSignup}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Your name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
            id='name'
            placeholder='hsn'
            required
            className='py-3 px-4 border rounded focus:ring-2 focus:ring-green-500'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            id='email'
            placeholder='hsn@dev.com'
            required
            className='py-3 px-4 border rounded focus:ring-2 focus:ring-green-500'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // type='password'
            id='password'
            placeholder='••••••••'
            required
            minLength={8}
            className='py-3 px-4 border rounded focus:ring-2 focus:ring-green-500'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='passwordConfirm'>Confirm password</label>
          <input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            // type='password'
            id='passwordConfirm'
            placeholder='••••••••'
            required
            minLength={8}
            className='py-3 px-4 border rounded focus:ring-2 focus:ring-green-500'
          />
        </div>
        <button type='submit' className='btn btn--green w-full'>
          Sign up
        </button>
      </form>
    </div>
  );
}
