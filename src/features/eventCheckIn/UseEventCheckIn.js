import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { checkInAttendee } from "./apiEventCheckIn";

export default function UseEventCheckIn() {
  const { mutate: checkIn, isLoading } = useMutation({
    mutationFn: checkInAttendee,
    onSuccess: () => {
      toast.success("Attendee checked in successfully!", { duration: 3000 });
      //   setTicketId("");
    },
    onError: (error) => {
      toast.error("Invalid Ticket ID. Please try again. ", { duration: 3000 });
    },
  });
  return { checkIn, isLoading };
}
