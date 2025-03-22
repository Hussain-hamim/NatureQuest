import React from 'react';

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto my-16 p-8 bg-white rounded shadow-md">
      <h2 className="text-3xl text-center text-natours-gray-dark-3 font-bold mb-8">Log into your account</h2>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-natours-gray-dark-2 text-base" htmlFor="email">
            Email address
          </label>
          <input
            className="py-3 px-4 border border-natours-gray-light-2 bg-natours-gray-light-1 rounded focus:outline-none focus:ring-2 focus:ring-natours-green"
            type="email"
            id="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-natours-gray-dark-2 text-base" htmlFor="password">
            Password
          </label>
          <input
            className="py-3 px-4 border border-natours-gray-light-2 bg-natours-gray-light-1 rounded focus:outline-none focus:ring-2 focus:ring-natours-green"
            type="password"
            id="password"
            placeholder="••••••••"
            required
            minLength={8}
          />
        </div>
        <div>
          <button className="btn btn--green w-full">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
