import { useEvents } from "../features/events/useEvents";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import Spinner from "../ui/Spinner";

function EventCard() {
  const { events, isPending, isError, error } = useEvents();

  if (isPending) return <Spinner isPending={isPending} />;

  if (isError)
    return (
      <div className="w-full mt-5 py-10 px-2 flex flex-col justify-center items-center text-lg text-red-500 font-bold">
        <span role="img" aria-label="confused face" className="text-4xl mb-2">
          🤔
        </span>
        <span>
          Oops! Something went wrong...{" "}
          <span className="text-orange-500">
            Let's try again and keep the party going!
          </span>
        </span>
        <span className="mt-2 text-sm text-gray-500">{error.message}</span>
        <span role="img" aria-label="party popper" className="text-3xl mt-2">
          🎉
        </span>
      </div>
    );

  if (events.length === 0) {
    return (
      <div className="w-full py-30 flex justify-center items-center text-lg text-gray-600 font-bold">
        🎉{" "}
        <span className="ml-2">
          No events available at the moment. Stay tuned for some fun!
        </span>{" "}
        🎉
      </div>
    );
  }
  
  return (
    <div className="w-full my-10 font-roboto flex flex-wrap gap-12  justify-center bg-white ">
      {events.map((event, i) => (
        <div
          className="w-11/12 border-1  border-gray-100 rounded-xl lg:w-3/12 md:w-5/12 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          key={i}
        >
          <div>
            <div className=" bg-grey-500 border-b-1 lg:h-80 border-gray-100 w-full  h-70 rounded-t-xl flex justify-center items-center ">
              <img
                alt="event flyer"
                className="h-full rounded-t-xl w-full"
                src={event.eventImage }
              />
            </div>
            <div className="w-full p-3  bg-white rounded-b-xl">
              <h2 className="text-xl font-medium">{event.eventName}</h2>
              <div className="text-gray-700 text-md my-2 flex flex-col gap-1">
                <p className="flex items-center">
                  <span>
                    <FaRegClock className="inline" />
                  </span>
                  <span className="ml-3">{event.eventDate}</span>
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
                  <span className="ml-3">
                    {event.soldOut ? "SOLD OUT" : "FREE"}
                  </span>
                </p>
                <Link
                  to={event.soldOut ? "#" : `/event/${event.eventName}`}
                
                >
                  <ButtonPrimary
                    className="px-4 py-2 mt-2 text-sm "
                    disabled={event.soldOut}
                  >
                    {event.soldOut ? "Sold Out" : "Get Ticket"}
                  </ButtonPrimary>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventCard;
