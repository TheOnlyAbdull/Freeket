import { NavLink, Outlet, useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function AuthorizedLayout() {
    const navigate = useNavigate();
    //1. load authenticated user
    const { isLoading, isAuthenticated } = useUser();

    //2. if user is not authenticated, redirect to login
    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            navigate("/Account");
        }
    }, [isAuthenticated, isLoading, navigate]);
   
    //3.show spinner while loading
    if (isLoading) return <div className="flex justify-center items-center h-screen"><Spinner/></div>;


    if (isAuthenticated) return (
    <div className="relative">
        <NavBar/>
        <Outlet />
    </div>
);
}

export default AuthorizedLayout;
