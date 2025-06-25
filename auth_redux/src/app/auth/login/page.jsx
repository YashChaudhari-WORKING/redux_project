"use client";
import React, { useEffect, useState } from "react";
import { login } from "@/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
const filed = [
  {
    label: "Username",
    name: "username",
    type: "text",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
];

const loginForm = () => {
  const { isAuthenticated, loading, error, user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const router = useRouter();
  console.log(isAuthenticated, loading, error, user);

  const [formData, setformData] = useState({
    username: "",
    password: "",
  });
  const handleform = (e) => {
    const { value, name } = e.target;
    setformData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="flex h-screen justify-center items-center border-rose-200">
      <div className="flex flex-col items-start">
        {filed.map((fileds, index) => {
          return (
            <div key={index} className="flex flex-col">
              <label className="font-bold text-xl" htmlFor={fileds.name}>
                {fileds.label}
              </label>
              <input
                type={fileds.type}
                name={fileds.name}
                id={fileds.name}
                onChange={(e) => handleform(e)}
                className="p-2 border bg-gray-50"
              />
            </div>
          );
        })}
        {error && <p className="text-xl ">{error}</p>}
        <button
          onClick={() => dispatch(login(formData))}
          className="p-2 bg-indigo-300 mt-2 cursor-pointer"
        >
          {loading ? "loggin In..." : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default loginForm;
