import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function EventCard({ events }) {
  // const navigate = useNavigate();
  // const handleEventClick = () => {
  //   // navigate("/Explore/event", { state: { event } });
  //   navigate("/event");
  // };
  return (
    <div className="w-full mt-5 font-roboto flex flex-wrap gap-4 justify-center">
      {events.map((event, i) => (
        <Link 
        className="w-10/12 border-1 my-5 border-gray-100 rounded-xl lg:w-3/12"
        
        to={`/event/${event.title}`} key={i}>
          <div
            // className="w-10/12 border-1 my-5 border-gray-100 rounded-xl lg:w-3/12"
          >
            <div className=" bg-grey-500 border-b-1 lg:h-85 border-gray-100 w-full  h-72 rounded-t-xl flex justify-center items-center ">
              <img
                alt="event flyer"
                className="h-full rounded-t-xl "
                src={event.image}
              />
            </div>
            <div className="w-full p-3  bg-white rounded-b-xl">
              <h2 className="text-xl font-medium">{event.title}</h2>
              <div className="text-gray-700 text-md my-2 flex flex-col gap-1">
                <p className="flex items-center">
                  <span>
                    <FaRegClock className="inline" />
                  </span>
                  <span className="ml-3">{event.date}</span>
                </p>
                <p>
                  <span>
                    <FaLocationDot className="inline" />
                  </span>
                  <span className="ml-3">{event.location}</span>
                </p>
                <p>
                  <span>
                    <BsTicketPerforatedFill className="inline" />
                  </span>
                  <span className="ml-3">{event.price}</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default EventCard;
