import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { registerAttendee } from "./apiRegistration";


export function useEventRegistration() {
  const { mutate: purchaseTicket, isPending } = useMutation({
    mutationFn: registerAttendee,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      toast.success("Ticket booked successfully, check your email for confirmation 🎆🎈!", { duration: 4000 });
    },

    onError: (error) => {
      console.error("Registration failed:", error);
      toast.error(error.message || "Failed to book ticket. Please try again.", { duration: 4000 });
    },
  });

  return { purchaseTicket, isPending };
}
