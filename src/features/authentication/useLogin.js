import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData("currentUser", user.user);
      navigate("/CreateEvent", { replace: true });
    },
    onError: (err) => {
      console.error("Login failed:", err.message);
      toast.error("Invalid Credentials");
    },
  });

  return { login, isLoading };
}
