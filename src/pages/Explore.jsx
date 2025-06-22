import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import getEvents from "../services/apiEvent";

//date fetched from superbase
const events = [
  {
    title: "Web-3 Conference",
    date: "Fri, May 09 2025, 12:00pm",
    location: "Virtual",
    price: "FREE",
    image: "src/assets/event flier/flier 1.webp",
    id: 1,
  },
  {
    title: "Creative Writing Workshop",
    date: "Sat, Jun 01 2025, 10:00am",
    location: "6 Southern Street, New York",
    price: "SOLD OUT",
    image: "src/assets/event flier/flier 2.webp",
    id: 2,

  },
  {
    title: "Photography Walk & Talk",
    date: "Sun, May 19 2025, 4:00pm",
    location: "Lagos Marina, Lagos",
    price: "FREE",
    image: "src/assets/event flier/flier 3.png",
    id: 3,
  },
  {
    title: "Startup Pitch Night",
    date: "Thu, May 23 2025, 6:30pm",
    location: "Innovation Hub, Berlin",
    price: "SOLD OUT",
    image: "src/assets/event flier/flier 4.jpg",
    id: 4,
  },
  {
    title: "Art & Chill Hangout",
    date: "Fri, May 30 2025, 5:00pm",
    location: "Zen Garden, Nairobi",
    price: "FREE",
    image: "src/assets/event flier/flier 5.jpg",
    id: 5,
  },
  {
    title: "Women in Tech Meetup",
    date: "Wed, May 15 2025, 2:00pm",
    location: "SheCodes Space, Accra",
    price: "FREE",
    image: "src/assets/event flier/flier 6.jpg",
    id: 6,
  },
  {
    title: "Film Screening: Indie Shorts",
    date: "Mon, May 27 2025, 7:00pm",
    location: "Virtual",
    price: "SOLD OUT",
    image: "https://via.placeholder.com/400x300?text=Film+Screening",
    id: 7, 
  },
  {
    title: "Freelancers Networking Brunch",
    date: "Sat, Jun 08 2025, 11:00am",
    location: "Freelance Hub, Cape Town",
    price: "FREE",
    image: "src/assets/event flier/flier 8.webp",
    id: 8,
  },
];



function Explore() {
  getEvents();
  

  return (
    <>
      <div className="w-full bg-[url(src/assets/hero-bg.png)] bg-cover bg-no-repeat font-roboto">
        <div className="text-center w-10/12 lg:w-5/12 mx-auto  py-12 lg:py-15">
          <h1 className="text-3xl lg:text-4xl  mb-1">
            Explore the world of events and activities!
          </h1>
          <p className="text-lg">
            Discover new experiences and connect with others.
          </p>
        </div>
      </div>
      {/* <EventCard events={events} /> */}
      <Footer />
    </>
  );
}

export default Explore;
