import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
   const { data: user, isLoading } = useQuery({
    queryKey:["currentUser"],
    queryFn: getCurrentUser,
   });

    return { user, isLoading, isAuthenticated:  user?.role === 'authenticated'  };
}
