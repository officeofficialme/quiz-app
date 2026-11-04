import { useState } from "react";

const RegisterPage = () => {
  const env = import.meta.env;
  return (
    <div>
      <form
        action={`${env.VITE_BACKEND_URL}/api/auth/register`}
        method="POST"
        className="flex flex-col items-center gap-4 w-70 mx-auto"
      >
        <h1 className="text-3xl font-bold">Registration Form</h1>
        <div className="w-full flex flex-row justify-between items-center">
          <label htmlFor="name">Username</label>
          <input type="text" id="uname" name="uname" className="border-b-2" />
        </div>
        <div className="w-full flex flex-row justify-between items-center">
          <label htmlFor="pass">Password</label>
          <input type="password" id="pass" name="pass" className="border-b-2" />
        </div>
        <input
          type="submit"
          className="bg-red-400 px-4 py-1 hover:bg-red-500 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default RegisterPage;
