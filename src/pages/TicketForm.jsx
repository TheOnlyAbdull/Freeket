import { FaLocationDot, FaRegClock } from "react-icons/fa6";
import ButtonPrimary from "../components/ButtonPrimary";
import Footer from "../components/Footer";

function TicketForm() {
  return (
    <div className="w-full mt-10">
      <div className="w-full mb-10 md:flex-row md:w-10/12 mx-auto relative px-8 md:px-0 flex flex-col gap-8">
      

        <div className="md:w-6/12">
          <form>
            <div>
              <label htmlFor="full-name">First Name</label>
              <input
                className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
                placeholder="Enter Full Name"
                type="text"
                id="full-name"
                name="full-name"
                required
              />
            </div>
            <div>
              <label htmlFor="phone-number">Phone Number</label>
              <input
                className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
                placeholder="Enter Phone Number"
                type="text"
                id="phone-number"
                name="phone-number"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="email">Email address</label>
              <input
                className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
                placeholder="Enter email address"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <ButtonPrimary>Book a Slot</ButtonPrimary>
          </form>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg md:w-6/12 shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-grey-500">Your Ticket</h1>
          <div className="border-t-1 border-orange-500 py-2">
            <h2 className="font-bold text-grey-500">Order Details</h2>
            <div className="text-gray-700 text-sm my-2 flex flex-col gap-2 ">
              <p className="flex items-center">
                <span>
                  <FaRegClock className="inline" />
                </span>
                <span className="ml-3 ">Fri, May 09 2025, 12:00pm</span>
              </p>
              <p className="flex items-center">
                <span>
                  <FaLocationDot className="inline" />
                </span>
                <span className="ml-3">Virtual</span>
              </p>
            </div>
          </div>
          <div className="py-2 border-t-1 border-orange-500">
            <p className=" font-bold  text-grey-500">summary</p>
            <p className="text-gray-900 text-sm my-2 flex gap-1">
              <span className="uppercase">web 3 confrence</span>
              <span>x 1</span>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TicketForm;
