import { useState } from "react";
import { loginUser } from "../../services/apiAuth";
import { useLogin } from "./useLogin";

function Login({ setCreateAccount }) {
  const [email, setEmail] = useState("abdullahi@gmail.com");
  const [password, setPassword] = useState("password");

    const {login, isLoading} = useLogin();
  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) return;

    loginUser({ email, password });
    login({ email, password }, {
      onSettled: () => {
        setEmail('');
        setPassword('');
      }
    });
  }
  return (
    <>
      <h1 className="text-3xl mb-1 font-bold">Log in</h1>
      <p className="mb-6  text-gray-500">
        Enter your details to log in to your acccount
      </p>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            className={`block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm ${isLoading ? "bg-gray-100 cursor-not-allowed opacity-70" : ""}`}
            placeholder="Enter email address"
            type="email"
            id="email"
            name="email"
            required
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className={`block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm ${isLoading ? "bg-gray-100 cursor-not-allowed opacity-70" : ""}`}
            placeholder="Enter Password"
            type="password"
            id="password"
            name="password"
            required
            disabled={isLoading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className={`my-6 cursor-pointer rounded-sm bg-orange-500 text-white w-full py-3 font-bold block text-center ${isLoading ? "bg-orange-300 cursor-not-allowed opacity-70" : ""}`}
          type="submit"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="text-sm  text-gray-500">
        <p className="text-cyan-400 cursor-pointer mb-3">
          Forgot password <span>Reset it</span>
        </p>
        <p>
          Don't have an account?{" "}
          <span
            className="text-cyan-400 cursor-pointer"
            onClick={() => setCreateAccount(true)}
          >
            Sign up
          </span>
        </p>
      </div>
    </>
  );
}

export default Login;
