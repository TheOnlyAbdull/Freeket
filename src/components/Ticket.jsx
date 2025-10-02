import { FaLocationDot, FaRegClock } from "react-icons/fa6";
function Ticket({ eventName, eventDate, eventTime, eventVenue }) {
  return (
    <div className="bg-gray-50 p-8 px-4 rounded-lg md:w-6/12 shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-grey-500">Your Ticket</h1>
      <div className="border-t-1 border-orange-500 py-2">
        <h2 className="font-bold text-grey-500">Order Details</h2>
        <div className="text-gray-700 text-sm my-2 flex flex-col gap-2 ">
          <p className="flex items-center">
            <span>
              <FaRegClock className="inline" />
            </span>
            <span className="ml-3 ">{eventDate} : {eventTime}</span>
          </p>
          <p className="flex items-center">
            <span>
              <FaLocationDot className="inline" />
            </span>
            <span className="ml-3">{eventVenue}</span>
          </p>
        </div>
      </div>
      <div className="py-2 border-t-1 border-orange-500">
        <p className=" font-bold  text-grey-500">summary</p>
        <p className="text-gray-900 text-sm my-2 flex gap-1">
          <span className="uppercase">{eventName}</span>
          <span>x 1</span>
        </p>
      </div>
    </div>
  );
}

export default Ticket;
