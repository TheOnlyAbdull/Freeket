import { useQuery } from "@tanstack/react-query";
import getEventAnalytics from "./apiEventAnalytics";

function useEventAnalytics(eventId){
    const {data, isPending, error} = useQuery({
        queryKey: ["analytics", eventId],
        queryFn: () => getEventAnalytics({ eventId }),
    })
    return {data, isPending, error};
}

export default useEventAnalytics;