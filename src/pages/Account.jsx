import { useState } from "react";
import Header from "../components/Header";

function Account() {
  const [createAccount, setCreateAccount] = useState(true);
  return (
    <div>
      <Header />
      <div className="w-full font-roboto flex items-center mt-10">
        <div className="w-11/12 mx-auto md:w-4/12">
          {createAccount ? (
            <>
              <h1 className="text-3xl mb-1 font-bold">Create account</h1>
              <p className="mb-6 text-gray-500">
                Enter your details to create your account
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl mb-1 font-bold">Log in</h1>
              <p className="mb-6  text-gray-500">
                Enter your details to log in to your acccount
              </p>
            </>
          )}

          <form>
            {createAccount && (
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
                  placeholder="Enter Full Name"
                  type="text"
                  id="full-name"
                  name="full-name"
                  required
                />
              </div>
            )}
            <div>
              <label htmlFor="email">Email address</label>
              <input
                className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
                placeholder="Enter email address"
                type="email"
                id="email"
                name="email"
                required
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
              />
            </div>
            <button
              className="my-8 cursor-pointer rounded-sm bg-orange-500 text-white w-full py-3 font-bold block text-center"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="text-sm  text-gray-500">
            {!createAccount && (
              <p className="text-cyan-400 cursor-pointer mb-3">
                Forgot password <span>Reset it</span>
              </p>
            )}
            {createAccount ? (
              <p>
                Have an account? 
                <span
                  className="text-cyan-400 cursor-pointer"
                  onClick={() => setCreateAccount(false)}
                >
                  Log in intead
                </span>
              </p>
            ) : (
              <p>
                Don't have an account? 
                <span
                  className="text-cyan-400 cursor-pointer" 
                  onClick={() => setCreateAccount(true)}
                >
                   Sign up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
