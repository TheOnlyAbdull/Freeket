import { useState } from "react";
import { Link } from "react-router-dom";
import UserEvent from "../components/UserEvent";

function EventList() {
 
  return (
    <>
      <div>
        <UserEvent />
      </div>
    </>
  );
}

export default EventList;
