import { useState } from "react";
import Header from "../components/Header";
import SignUp from "../features/authentication/SignUp";
import Login from "../features/authentication/Login";

function Account() {
  const [createAccount, setCreateAccount] = useState(true);
  return (
    <div>
      <Header />
      <div className="w-full font-roboto flex items-center mt-10">
        <div className="w-11/12 mx-auto md:w-4/12">
          {createAccount ? (
            <Login setCreateAccount={setCreateAccount} />
          ) : (
            <SignUp setCreateAccount={setCreateAccount} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
