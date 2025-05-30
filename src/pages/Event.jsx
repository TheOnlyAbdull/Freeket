import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import EventTicket from "./EventTicket";
import ButtonPrimary from "../components/ButtonPrimary";

function Event() {
  const { id } = useParams();
  return (
    <>
      <div className=" md:w-10/12 w-10/12 lg:w-7/12 mx-auto ">
        <div className=" flex flex-col md:flex-row  ">
          <div className="bg-grey-500 md:w-6/12  md:h-85 border-gray-100  h-72 rounded-xl flex justify-center items-center">
            <img
              alt="event flyer"
              className="h-full rounded-xl "
              src="src/assets/event flier/flier 8.webp"
            />
          </div>
          <div className="md:w-6/12 mt-4 bg-white rounded-xl md:p-8 lg:p-6">
            <h2 className="text-3xl font-medium">Web-3 Conference</h2>
            <div className="text-gray-700 text-base my-2 flex flex-col gap-1">
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
              <p className="mb-16">
                <span>
                  <BsTicketPerforatedFill className="inline" />
                </span>
                <span className="ml-3">FREE</span>
              </p>
              {/* <Link to> */}
                <ButtonPrimary>Get Ticket</ButtonPrimary>
              {/* </Link> */}
            </div>
          </div>
        </div>
        <div className="mt-5 bg-white">
          <h2 className="text-xl font-medium">About this event</h2>
          <p className="text-gray-900 text-base my-2 flex flex-col gap-1">
            Join us for an exciting Web-3 Conference where industry leaders and
            innovators come together to explore the latest trends and
            advancements in blockchain technology, decentralized applications,
            and the future of the internet. Network with like-minded
            individuals, attend insightful talks, and participate in hands-on
            workshops. Don't miss this opportunity to be part of the Web-3
            revolution!
          </p>
        </div>
      </div>

      {/* //overlay form */}
      <EventTicket />
    </>
  );
}

export default Event;
