import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import { useQuery } from "@tanstack/react-query";
import getEvents from "../services/apiEvent";

// function EventCard({ events }) {
function EventCard() {
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["event"],
    queryFn: getEvents,
  });
  // console.log( events);

  // const eventPrice = event.ticket_quantity >= 1 ? "FREE" : "SOLD OUT";

  return (
    <div className="w-full mt-5 font-roboto flex flex-wrap gap-12 justify-center">
      {events.map((event, i) => (
        <div
          className="w-10/12 border-1 my-5 border-gray-100 rounded-xl lg:w-3/12 md:w-5/12 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
          key={i}
        >
          <div>
            <div className=" bg-grey-500 border-b-1 lg:h-80 border-gray-100 w-full  h-70 rounded-t-xl flex justify-center items-center ">
              <img
                alt="event flyer"
                className="h-full rounded-t-xl "
                // src={event.image}
              />
            </div>
            <div className="w-full p-3  bg-white rounded-b-xl">
              <h2 className="text-xl font-medium">{event.name}</h2>
              <div className="text-gray-700 text-md my-2 flex flex-col gap-1">
                <p className="flex items-center">
                  <span>
                    <FaRegClock className="inline" />
                  </span>
                  <span className="ml-3">{event.event_date}</span>
                </p>
                <p>
                  <span>
                    <FaLocationDot className="inline" />
                  </span>
                  <span className="ml-3">{event.event_location}</span>
                </p>
                <p>
                  <span>
                    <BsTicketPerforatedFill className="inline" />
                  </span>
                  <span className="ml-3">{event.ticket_quantity >= 1 ? 'FREE' : 'SOLD OUT'}</span>
                </p>
                <Link
                  to={
                    event.ticket_quantity >= 1 ? `/event/${event.title}` : "#"
                  }
                >
                  <ButtonPrimary
                    className="px-4 py-2 mt-2 text-sm "
                    disabled={event.ticket_quantity < 1}
                  >
                    {event.ticket_quantity < 1 ? "Sold Out" : "Get Ticket"}
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
