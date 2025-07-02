import corpLogo from '../assets/dummy-logo/corp.svg';
import blockLogo from '../assets/dummy-logo/block.svg';
import deg45Logo from '../assets/dummy-logo/45 deg.svg';
import portal3Logo from '../assets/dummy-logo/3 portal.svg';

function DummyLogos() {
  return (
    <div className="w-full bg-grey-100 lg:px-10 font-finger-paint">
      <div className="flex items-center justify-center text-center flex-wrap gap-2 my-20 text-gray-500">
        <img src={corpLogo} alt="Corp Logo" className="w-40" />
        <img src={blockLogo} alt="Block Logo" className="w-40" />
        <img src={deg45Logo} alt="45 Degree Logo" className="w-40" />
        <img src={portal3Logo} alt="3 Portal Logo" className="w-40" />
      </div>
    </div>
  );
}

export default DummyLogos;
