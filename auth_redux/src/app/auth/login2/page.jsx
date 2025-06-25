"use client";
import React, { useEffect } from "react";
import { useLoginUserMutation } from "@/features/api/loginUser";
const page = () => {
  const [loginUser, { isLoading, error, data }] = useLoginUserMutation();
  console.log(isLoading, error, data);
  const login = async () => {
    const res = await loginUser({
      username: "emilys",
      password: "emilyspass",
    }).unwrap();
    console.log(res);
  };
  useEffect(() => {
    login();
  }, []);
  return <div>page</div>;
};

export default page;
