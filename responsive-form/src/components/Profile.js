import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../middleware/UserSlice";

export default function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="rounded-3xl sm:border-2">
      <div className="invisible sm:visible w-full h-10 items-center justify-center bg-gradient-to-tr from-violet-500 to-pink-500 rounded-t-3xl"></div>
      <div className="w-full bg-white pr-28 px-10 py-12  border-gray-200">
        <h1 className="text-4xl font-bold mb-8">User Details</h1>
        <span class="inline-grid grid-cols-2 gap-y-2 text-medium font-semibold">
          <span>Name</span>
          <span>{user?.name}</span>
          <span>Email</span>
          <span>{user?.email}</span>
          <span>Phone</span>
          <span>{user?.phone}</span>
          <span>Date of Birth</span>
          <span>{user?.dob}</span>
          <span>Password</span>
          <span>{user?.password}</span>
        </span>
      </div>
      <div className="invisible sm:visible w-full h-10 items-center justify-center bg-gradient-to-tr from-violet-500 to-pink-500 rounded-b-3xl"></div>
    </div>
  );
}
