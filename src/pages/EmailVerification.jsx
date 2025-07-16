import { CiCircleCheck, CiMail } from "react-icons/ci";
import { useUser } from "../features/authentication/useUser";
import { Link } from "react-router-dom";

function EmailVerification() {
  const { isAuthenticated } = useUser();
  return (
    <div className="w-full font-roboto flex justify-center items-center h-screen">
      <div className="w-11/12 md:w-4/12 border-2 border-orange-400 py-10">
        <h1 className="text-center text-8xl font-bold text-orange-500 flex items-center justify-center">
          {isAuthenticated ? <CiCircleCheck /> : <CiMail />}
        </h1>
        {!isAuthenticated ? (<h2 className="text-center text-xl font-semibold mt-4">
          Verify your email address
        </h2>): (<h2 className="text-center text-xl font-semibold mt-4">
          Email verification was successful!💐
        </h2>

        )}
        {!isAuthenticated? (<p className="text-center mt-4">
          Please check your email for a verification link.
        </p>): (<p className="text-center mt-4">
          Click the link below to proceed
        </p>)}
        {isAuthenticated && (
          <p className="text-center mt-4"><Link to="/CreateEvent" className="text-orange-500 underline">Go to Account</Link></p>
        )}
      </div>
    </div>
  );
}

export default EmailVerification;
