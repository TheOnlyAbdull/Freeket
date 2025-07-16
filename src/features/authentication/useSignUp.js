import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpUser,
    onSuccess: (user) => {
      console.log("User signed up successfully:", user);
      toast.success("Account created successfully!. Please verify your email.");
      navigate("/verify-email");
    },
  });

  return { signUp, isLoading };
}
