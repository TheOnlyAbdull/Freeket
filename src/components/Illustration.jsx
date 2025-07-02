import worldIllus from '../assets/world-illus.svg';
import connectIllus from '../assets/connect-illus.svg';

function Illustration() {
  return (
    <div className="mb-8 flex justify-around w-full px-4 md:px-10 ">
      <div className="w-6/12 md:w-4/12">
        <img src={worldIllus} alt="World Illustration" />
      </div>
      <div className="w-6/12 md:w-4/12">
        <img src={connectIllus} alt="Connect Illustration" />
      </div>
    </div>
  );
}

export default Illustration;
