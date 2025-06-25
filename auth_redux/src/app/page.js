"use client";
import { login } from "@/features/authSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/features/authSlice";
import { useRouter } from "next/navigation";
import { useGetUserQuery } from "@/features/api/fetchUser";
export default function Home() {
  const { accessToken, isAuthenticated } = useSelector((state) => state.auth);
  const { data: users, error, isLoading } = useGetUserQuery();
  console.log(users, error, isLoading);

  const dispatch = useDispatch();
  const router = useRouter();
  // useEffect(() => {
  //   dispatch(login({ username: "emilys", password: "emilyspass" }));
  // }, [dispatch]);
  // useEffect(() => {
  //   if (isAuthenticated === false) {
  //     router.push("/auth/login");
  //   }
  // }, [isAuthenticated, router]);

  return (
    <div>
      <h1>Auth System Using Reudx</h1>
      <button
        onClick={() => {
          dispatch(logout());
        }}
        className="p-2 bg-red-400"
      >
        LogOut
      </button>
    </div>
  );
}
