import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import TicketForm from "./TicketForm";
import ButtonPrimary from "../components/ButtonPrimary";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEvents } from "../features/events/useEvents";
import Spinner from "../ui/Spinner";

function Event() {
  const [openTicketForm, setOpenTicketForm] = useState(false);
  const { id } = useParams();
  const { events, isPending, isError } = useEvents();

  // const location = useLocation();
  // let event = location.state?.event || events?.find((e) => e.id === id);
  // let event = location.state?.event || events

  const event = events?.find((e) => e.eventName === id);

  if (isPending) {
    return <Spinner isPending={isPending} />;
  }

  if (isError) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Event Not Found
        </h2>
        <p className="text-gray-600">
          Sorry, the event you are looking for does not exist.
        </p>
        <Link to="/Explore" className="text-blue-500 hover:underline mt-4">
          Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <div className=" md:w-10/12 w-11/12 lg:w-7/12 mx-auto ">
        <div className=" flex flex-col md:flex-row  ">
          <div className="bg-grey-500 md:w-6/12  md:h-85 border-gray-100  h-72 rounded-xl flex justify-center items-center">
            <img
            
              alt="event flyer"
              className="h-full rounded-xl w-full"
              src={event.eventImage}
            />
          </div>
          <div className="md:w-6/12 mt-4 bg-white rounded-xl md:p-8 lg:p-6">
            <h2 className="text-3xl font-medium">{event.eventName}</h2>
            <div className="text-gray-700 text-base my-2">
              <p className="flex items-center">
                <span>
                  <FaRegClock className="inline" />
                </span>
                <span className="ml-3">{event.eventDate}, 12:00pm</span>
              </p>
              <p className="flex items-center">
                <span>
                  <FaLocationDot className="inline" />
                </span>
                <span className="ml-3">{event.eventAddress}</span>
              </p>
              <p className="flex items-center mb-16">
                <span>
                  <BsTicketPerforatedFill className="inline" />
                </span>
                <span className="ml-3">FREE</span>
              </p>
              <ButtonPrimary
                onClick={() => setOpenTicketForm(true)}
                className="py-4 "
              >
                Get Ticket
              </ButtonPrimary>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-10 bg-white">
          <h2 className="text-xl font-medium">About this event</h2>
          <p className="text-gray-900 text-base my-2">
            {event.longDescription}
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-medium">Event Details</h3>
            <p className="text-gray-900 text- capitalize my-1">
              <strong className="text-orange-900 ">Organizer:</strong>{" "}
              {event.organizerName}
            </p>
            <p className="text-gray-900 text-base capitalize my-1">
              <strong className="text-orange-900 ">Category:</strong>{" "}
              {event.eventCategory}
            </p>
            <p className="text-gray-900 text-base capitalize my-1">
              <strong className="text-orange-900 ">Event Type:</strong>{" "}
              {event.eventType}
            </p>
            <p className="text-gray-900 text-base capitalize my-1">
              <strong className="text-orange-900 ">Duration:</strong> 4 hours
            </p>
            <p className="text-gray-900 text-base capitalize my-1">
              <strong className="text-orange-900 ">Contact:</strong>{" "}
              {event.contactEmail}
            </p>
          </div>
        </div>
      </div>
      {openTicketForm && <TicketForm onClose={setOpenTicketForm} eventName={event.eventName} eventId={event.id} />}
      <Footer />
    </div>
  );
}

export default Event;
