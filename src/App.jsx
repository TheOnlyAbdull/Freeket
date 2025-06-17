import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import AuthorizedLayout from "./ui/AuthorizedLayout";
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import Booking from "./pages/Booking";
import Analytics from "./pages/Analytics";
import Account from "./pages/Account";
import CreateEvent from "./pages/CreateEvent";
import CheckIn from "./pages/CheckIn";
import PageNotFound from "./pages/PageNotFound";
import Event from "./pages/Event";
import ManageEvents from "./pages/ManageEvents";
import EventTicket from "./pages/TicketForm";
import EventList from "./pages/EventList";

function App() {
  const boy = 23;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="event/:id" element={<Event />} />
          {/* <Route path="event/:id/ticket" element={<EventTicket />} /> */}
        </Route>

        {/* // Protected Routes */}
        <Route element={<AuthorizedLayout />}>
          <Route path="CreateEvent" element={<CreateEvent />} />
          <Route path="CheckIn" element={<CheckIn />} />
          <Route path="ManageEvents" element={<ManageEvents />}>
            <Route index  element={<EventList/>}/>
            <Route path="/ManageEvents/Analytics" element={<Analytics />} />
          </Route>
          <Route path="Booking" element={<Booking />} />
        </Route>

        <Route path="Account" element={<Account />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
