import { useState } from "react";
import { Link } from "react-router-dom";
import UserEvent from "../components/UserEvent";

function EventList() {
  const [availableEvents] = useState(1);

  return (
    <>
      {availableEvents > 0 ? (
        <div>
          <p>You have 1 upcoming event</p>
          <div>
            <UserEvent/>
          </div>
        </div>
      ) : (
        <p className="text-gray-700">
          There are no current events.{" "}
          <Link to="/createEvent" className="text-orange-500 underline">
            Create event
          </Link>
        </p>
      )}
    </>
  );
}

export default EventList;
