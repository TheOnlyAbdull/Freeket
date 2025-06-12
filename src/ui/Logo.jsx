import { TfiTicket } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Logo({path}) {
  return (
    <Link to={path} className=" font-finger-paint text-2xl flex justify-center items-center">
      <span className="text-gray-700">
        <TfiTicket />
      </span>
      <span className="text-orange-500">FREEKET</span>
    </Link>
  );
}

export default Logo;
