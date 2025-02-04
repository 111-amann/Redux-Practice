import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/reducers/UserReducer"

function Users() {
  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-96 bg-zinc-900 p-10">
      <div className="h-fit bg-zinc-700 text-zinc-300 p-5">
        <h1 className="text-2xl font-bold text-white mb-1">All Users</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index} className="mt-1">
              {user.firstname} {user.lastname}{" "}
              <span
                onClick={() => dispatch(deleteUser(index))}
                className="text-red-500 cursor-pointer"
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
