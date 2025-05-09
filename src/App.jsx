import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import Booking from "./pages/Booking";
import Analytics from "./pages/Analytics";
import Account from "./pages/Account";
import NewEvent from "./pages/NewEvent"
import CheckIn from "./pages/CheckIn";
import PageNotFound from "./pages/PageNotFound"

function App() {
  const boy = 23;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="Booking" element={<Booking />} />
          <Route path="CheckIn" element={<CheckIn />} />
          <Route path="NewEvent" element={<NewEvent />} />
          <Route path="Analytics" element={<Analytics />} />
        </Route>
        <Route path="Account" element={<Account />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
