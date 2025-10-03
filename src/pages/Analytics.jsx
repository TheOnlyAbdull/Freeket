import { Link, useLocation } from "react-router-dom";
import useEventAnalytics from "../features/eventAnalytics/useEventAnalytics";
import Spinner from "../ui/Spinner";

function Analytics() {
  const attendeesInfo = [
    { name: "John ben", email: "john@example.com", phone: "123-456-7890" },
    { name: "Smith ben", email: "jane@example.com", phone: "987-654-3210" },
  ];

  //Get data from userevent page and pass it here
  const { state } = useLocation();
  const { eventName, eventId, userId } = state || {};

  const { data, isPending, error } = useEventAnalytics(eventId);
  console.log(data);

  const registeredUsers = data?.length || 0;
  const availableSlots = 300 - registeredUsers; //remove
  const checkedInAttendees =
    data?.filter((attendee) => attendee.status == "checked").length || 0;

  if (isPending) {
    return (
      <div className="w-full p-4 border-2 border-orange-500 rounded my-4">
        <Spinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700">Error: {error?.message}</div>
    );
  }

  if (data?.length === 0) {
    return (
      <p className="p-4 bg-gray-100 font-sans">
        There are no current registered Users.
      </p>
    );
  }

  return (
    <>
    <Link to='/ManageEvents'
      className="mb-4 flex items-center text-orange-500 hover:text-orange-700 font-semibold transition-colors"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </Link>
    <div className="p-4 bg-gray-100 font-sans">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Event Analytics :{" "}
        <span className="font-medium text-orange-500">{eventName}</span>
      </h1>
      <div className="mb-6 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Summary</h2>
        <p className="text-gray-600">
          Number of people registered:{" "}
          <span className="font-medium">{registeredUsers}</span>
        </p>
        <p className="text-gray-600">
          Slots available: <span className="font-medium">{availableSlots}</span>
        </p>
        <p className="text-gray-600">
          Attendees checked in:{" "}
          <span className="font-medium">{checkedInAttendees}</span>
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Attendees Information
        </h2>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[500px] w-full border-collapse mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 whitespace-nowrap">
                  Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 whitespace-nowrap">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-600 whitespace-nowrap">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((attendee, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 whitespace-nowrap">
                    {attendee.profile.displayName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 whitespace-nowrap">
                    {attendee.profile.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-700 whitespace-nowrap">
                    {attendee.profile.phoneNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>

  );
}

export default Analytics;
