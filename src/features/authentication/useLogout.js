import { useMutation, useQueryClient } from "@tanstack/react-query";
import {logOutUser} from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient ()
    const {mutate:logOut, isLoading}= useMutation({
        mutationFn: logOutUser,
        onSuccess:()=>{
            queryClient.removeQueries();
            navigate('/Explore', {replace: true}); 
        }
    })

    return {logOut, isLoading};
}