import { Outlet } from "react-router-dom";

function ManageEvents() {
  return (
    <>
      <div className="p-4 flex items-center justify-center mt-20">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ">
        
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-700 font-roboto">
            Manage Your Events
          </h1>

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ManageEvents;
