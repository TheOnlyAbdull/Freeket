import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEvents } from "../features/events/useEvents";
import { useUser } from "../features/authentication/useUser";
import Spinner from "../ui/Spinner";


function UserEvent() {
  const { events, isPending, isError, error, status } = useEvents();
  const { user } = useUser();

  console.log(events);
  console.log(user.id);
  const userEvents = events?.filter((event) => event.organizerId === user?.id);
  console.log(userEvents);
  console.log(status, error);

  if (isPending) {
    return (
      <div className="w-full p-4 border-2 border-orange-500 rounded my-4">
        <Spinner />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (events?.length === 0) {
    return (
      <p className="text-gray-700">
        There are no current events.
        <Link to="/createEvent" className="text-orange-500 underline">
          Create event
        </Link>
      </p>
    );
  }

  return (
    <>
      <p>You have {userEvents.length} upcoming events</p>
      {userEvents.map((event, i) => (
        <div
          className="w-full p-4 border-2 border-orange-500 rounded my-4"
          key={i}
        >
          {/* <h2 className="text-xl font-medium">Abdullah</h2> */}
          <h2 className="text-xl font-medium">{event.eventName}</h2>
          <div className="text-gray-700 text-md my-2 flex flex-col gap-1">
            <p className="flex items-center">
              <span>
                <FaRegClock className="inline" />
              </span>
              <span className="ml-3">{event.eventDate}: {event.startTime}</span>
            </p>
            <p>
              <span>
                <FaLocationDot className="inline" />
              </span>
              <span className="ml-3">{event.eventAddress}</span>
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
      ))}
    </>
  );
}

export default UserEvent;
