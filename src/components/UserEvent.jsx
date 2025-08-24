import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

//TODO
//Implement an Hook to get user id
//and also get user event based on user id
//

function UserEvent() {
  return (
    <div className="w-full p-4 border-2 border-orange-500 rounded my-4">
      <h2 className="text-xl font-medium">Web-3 Conference</h2>
      <div className="text-gray-700 text-md my-2 flex flex-col gap-1">
        <p className="flex items-center">
          <span>
            <FaRegClock className="inline" />
          </span>
          <span className="ml-3">Fri, May 09 2025, 12:00pm</span>
        </p>
        <p>
          <span>
            <FaLocationDot className="inline" />
          </span>
          <span className="ml-3">Virtual</span>
        </p>
        <p>
          <span>
            <BsTicketPerforatedFill className="inline" />
          </span>
          <span className="ml-3">FREE</span>
        </p>
        <Link
          to="/ManageEvents/Analytics"
          className="flex cursor-pointer items-center font-bold ml-auto text-orange-500 underline"
        >
          <span>
            <IoMdArrowForward />
          </span>
          <span>Analytics</span>
        </Link>
      </div>
    </div>
  );
}

export default UserEvent;
