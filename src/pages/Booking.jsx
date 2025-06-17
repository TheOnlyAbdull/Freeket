function Booking() {
  return (
    <div className="p-4 flex items-center justify-center">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ">
        <h1 className="text-4xl font-bold mb-6 text-left text-gray-700 font-roboto">
          Bookings
        </h1>
      <div className=""> 
        You have tickets booked for the following events:
        <ul className="my-2 font-medium text-gray-700">
          <li>✅Event 1 - Date: 2023-10-01</li>
          <li>✅Event 2 - Date: 2023-10-15</li>
          <li>✅Event 3 - Date: 2023-11-05</li>
        </ul>
        <p>For more details, please check your email or contact support.</p>
      </div>
      </div>
    </div>
  );
}

export default Booking;
