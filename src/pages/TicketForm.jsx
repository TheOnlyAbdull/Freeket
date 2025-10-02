import { useForm } from "react-hook-form";
import ButtonPrimary from "../components/ButtonPrimary";
import Ticket from "../components/Ticket";
import { useEventRegistration } from "../features/eventRegistration/useEventRegistration";

function TicketForm({ onClose, eventId, eventName, eventDate, eventTime, eventVenue }) {
  const {register, handleSubmit, reset} = useForm()
  const {purchaseTicket, isPending} = useEventRegistration();

function onSubmit(data) {
  //submit data
  purchaseTicket({...data, eventId, eventName});
  
  //reset form AND close modal
  reset();
  onClose(false);
}



  return (
    <div className="w-full absolute  top-0  z-10">
      <div className="w-full md:py-26  md:flex-row md:w-10/12 px-4 mx-auto border-y-4 bg-white relative p-10 border-orange-500 md:px-0 flex flex-col gap-8">
        <span
          onClick={() => onClose(false)}
          className="absolute top-2 right-0 cursor-pointer text-lg font-bold px-2 border-1 text-orange-500  "
        >
          X
        </span>
        <div className="md:w-6/12 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex md:flex-row gap-4">
              <div className="w-6/12">
                <label htmlFor="first-name">First Name</label>
                <input
                  className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
                  placeholder="Enter First Name"
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  {...register('firstName', {required: true})}
                />
              </div>
              <div className="w-6/12">
                <label htmlFor="last-name">Last Name</label>
                <input
                  className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
                  placeholder="Enter Last Name"
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  {...register('lastName', {required:true})}
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone-number">Phone Number</label>
              <input
                className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
                placeholder="Enter Phone Number"
                type="text"
                id="phone-number"
                name="phone-number"
                required
                {...register('phoneNumber', {required:true})}
              />
            </div>
            <div className="mb-8">
              <label htmlFor="email">Email address</label>
              <input
                className="block outline-1 text-gray-500 w-full mb-4 rounded-sm p-4 text-sm"
                placeholder="Enter email address"
                type="email"
                id="email"
                name="email"
                required
                {...register('email', {required:true})}
              />
            </div>
            <ButtonPrimary className="py-4" type='submit'>Book a Slot</ButtonPrimary>
          </form>
        </div>
        <Ticket/>
      </div>
    </div>
  );
}

export default TicketForm;
