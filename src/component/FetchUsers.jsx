import React, { useState } from "react";

const FetchUsers = () => {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(true);
  const api = "https://jsonplaceholder.typicode.com/users";

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setPending(false);
      const response = await fetch(api, { method: "GET" });
      const data = await response.json();
      data ? setUsersList(data) : setUsersList([]);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  const handleFetch = () => {
    fetchUsers();
  };
  const users = usersList?.map((user) => {
    return <p key={user.id}>{user?.name}</p>;
  });

  return (
    <>
      <div>
        <h1>Fetched Users from Json Placeholder</h1>
        {pending && <p>No user found!!</p>}
        {loading ? <p>Loading...</p> : users}
        {/* {users} */}
        <button className="border-2 py-2 px-4 my-5" onClick={handleFetch}>
          Fetch User
        </button>
      </div>
    </>
  );
};

export default FetchUsers;
