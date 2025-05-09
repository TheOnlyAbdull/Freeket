function EventCard({ events }) {
  return (
    <div className="w-full mt-5 font-roboto flex flex-wrap gap-4 justify-center">
      {events.map((event, i) => (
        <div
          key={i}
          className="w-10/12 border-1 my-5 border-gray-100 rounded-xl lg:w-3/12"
        >
          <div className=" bg-grey-500 border-b-1 lg:h-85 border-gray-100 w-full  h-72 rounded-t-xl flex justify-center items-center ">
            <img
              alt="event flyer"
              className="h-full rounded-t-xl "
              src={event.image}
            />
            
          </div>
          <div className="w-full p-3  bg-white rounded-b-xl">
            <h2 className="text-lg font-medium">{event.title}</h2>
            <div className="text-gray-700 text-base my-2 flex flex-col gap-1">
              <p>
                <span>⏲️</span> <span>{event.date}</span>
              </p>
              <p>
                <span>📍</span> <span>{event.location}</span>
              </p>
              <p>
                <span>💵</span> <span>{event.price}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventCard;
