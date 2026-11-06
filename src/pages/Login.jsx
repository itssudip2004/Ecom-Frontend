import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { login, signup } from "../services/apiAuth";

function useAuthMutation(mutationFn) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/home", { replace: true });
    },
  });
}
function Login({ mode }) {
  const isLogin = mode === "login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending } = useAuthMutation(isLogin ? login : signup);

  function handleSubmit(e) {
    e.preventDefault();

    if (isLogin) {
      mutate({
        email,
        password,
      });
    } else {
      mutate({
        email,
        password,
      });
    }
  }
  return (
    <div className=" min-h-screen flex justify-center items-center ">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 border border-black p-8 rounded-lg"
        >
          <label>Email</label>
          {!isLogin && (
            <input
              type="email"
              name="email"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-black"
            />
          )}
          <label>Password</label>
          {!isLogin && (
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-black"
            />
          )}
          <div>
            <button
              type="submit"
              disabled={isPending}
              className="border border-black self-start"
            >
              {isPending ? "Logging in..." : "Login"}
            </button>
            <button
              type="signin"
              className="border border-black self-start ml-5"
            >
              sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
