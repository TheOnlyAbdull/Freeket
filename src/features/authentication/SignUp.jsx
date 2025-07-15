import { useState } from "react";

function SignUp({ setCreateAccount }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



  return (
    <>
      <h1 className="text-3xl mb-1 font-bold">Create account</h1>
      <p className="mb-6 text-gray-500">
        Enter your details to create your account
      </p>

      <form>
        <div className="flex md:flex-row gap-4">
        <div className="w-6/12">
          <label htmlFor="first-name">First Name</label>
          <input
            className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
            placeholder="Enter First Name"
            type="text"
            id="first-name"
            name="first-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="w-6/12">
          <label htmlFor="last-name">Last Name</label>
          <input
            className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
            placeholder="Enter Last Name"
            type="text"
            id="last-name"
            name="last-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        </div>

        <div>
          <label htmlFor="email">Email address</label>
          <input
            className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
            placeholder="Enter email address"
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
            placeholder="Enter Password"
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}    
          />
        </div>
        <button
          className="my-6 cursor-pointer rounded-sm bg-orange-500 text-white w-full py-3 font-bold block text-center"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="text-sm  text-gray-500">
       

        <p>
          Have an account?{""}
          <span
            className="text-cyan-400 cursor-pointer"
            onClick={() => setCreateAccount(false)}
          >
            Log in intead
          </span>
        </p>
      </div>
    </>
  );
}

export default SignUp;
