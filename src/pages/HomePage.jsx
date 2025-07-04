import { FaWandMagicSparkles } from "react-icons/fa6";
import { IoIosGitNetwork } from "react-icons/io";
import Illustration from "../components/Illustration";
import DummyLogos from "../components/DummyLogos";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/background.png";
// import backgroundImage from "../assets/background.png";


function HomePage() {
  // Import the background image

  return (
    <>
      <main
        className="flex justify-center items-center w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg- w-11/12 text-center py-4 lg:w-6/12 lg:py-8">
          <p className="text-sm rounded-2xl border-amber-500 border-2 inline px-2">
            ❤️ Networking at zero cost
          </p>
          <h1 className="m-6 text-4xl md:text-5xl font-bold">
            Discover and Host Free Events—Effortlessly
          </h1>
          <p className="m-6 text-gray-700">
            Book tickets or create events in minutes—no fees, no stress.
            Everyone’s invited and networking happens without the usual hassle.
          </p>

          <div className="mb-8 flex justify-center items-center gap-4 mt-8">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-300 ease-in-out">
              <Link to='/CreateEvent' className="flex items-center">Create Event</Link>
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300 ease-in-out">
              <Link to='/Explore' className="flex items-center">
                Explore Events
              </Link>
            </button>
          </div>
        </div>
      </main>
      <Illustration />
      <DummyLogos />
      <Footer />
    </>
  );
}

export default HomePage;
