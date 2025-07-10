import { useQuery } from "@tanstack/react-query";
import { getEvents } from './apiEvent';

export function useEvents() {
  const {
    data: events,
    isPending,
    isError,
    error,
    status
  } = useQuery({
    queryKey: ["event"],
    queryFn: getEvents,
  });
  return { events, isPending, isError, error, status };
}
