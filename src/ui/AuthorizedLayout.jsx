import { NavLink, Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

function AuthorizedLayout() {
return (
    <div>
        <NavBar/>
        <Outlet />
    </div>
);
}

export default AuthorizedLayout;
