function CheckIn() {
  return (
    <div className="p-4 flex items-center justify-center mt-30">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ">
        <h1 className="text-4xl font-bold mb-6 text-left text-gray-700 font-roboto">
          Check In
        </h1>
        <div>
          <p className="text-gray-700 text-lg mb-4">
          Enter the ticket ID to check in attendees. Ensure the ID is correct.
          </p>
          <div className="bg-white p-6 rounded shadow-md">
            <div>
              <h3 className="text-2xl font-medium mb-2">Enter Ticket ID</h3>
              <input
                type="text"
                placeholder="Enter Ticket ID"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-200">
                Check In
              </button>
              {/* IF the ticket ID is valid, show the success message */}
                {/* <p className="text-green-500 mt-4">Attendee checked in successfully!</p> */}
                {/*if the ticket ID is invalid, show the error message */}
                {/* <p className="text-red-500 mt-4">Invalid Ticket ID. Please try again.</p> */}
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
