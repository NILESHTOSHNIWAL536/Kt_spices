"use client";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import  NavBar  from "./navbar";
import type { RootState } from "@/redux/store"; // adjust path


const HomePage = () => {
    const user = useSelector((state: RootState) => state.user);
    console.log("useSelector");
    console.log(user);

  useEffect(() => {
    console.log("Redux user state updated:", user);
  }, [user]); // ✅ Logs updated state

  // if (!user._id) return <p>Loading...</p>;

  return (
    <>
    {/* <h1 className="text-4xl text-blue-500">Tailwind Works 🎉</h1> */}
      <NavBar/>
      <h1>HomePage</h1>
      <p>User Name: {user.name}</p>
      <p>Mobile: {user.mobileNumber}</p>
    </>
  );
};

export default HomePage;
