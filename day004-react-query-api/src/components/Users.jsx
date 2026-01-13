//components/Users.js
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";

function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Users</p>;

  return (
    <ul>
        {data.map(user => (
            <li key={user.id}>
                {user.name}
            </li>
        ))}
    </ul>
  );
}

export default Users;
