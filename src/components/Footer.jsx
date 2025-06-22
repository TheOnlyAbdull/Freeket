import { FaXTwitter } from "react-icons/fa6";
import Logo from "../ui/Logo";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <div className="w-full bg-gray-900 font-roboto flex flex-col items-center py-4">
      <Logo />
      <p className="text-center text-gray-100 text-sm mt-4">
        &copy; 2025 Freeket. All rights reserved.
      </p>
      <p className=" flex item-center gap-4 text-gray-100 text-xl mt-2">
        <span className="text-gray-100 text-base ">Contact support:</span>
        <a href="#" className="text-orange-500 flex items-center">
          <FaXTwitter />
        </a>
        <a
          href="mailto:abdullahisalaudeen65@gmail.com"
          className="text-orange-500 flex items-center"
          title="Email Us"
        >
          <MdOutlineMail />
        </a>
      </p>
    </div>
  );
}

export default Footer;
