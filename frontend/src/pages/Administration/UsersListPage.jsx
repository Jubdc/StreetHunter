import { useState, useEffect } from "react";
import axios from "axios";

import UsersList from "../../components/UserComponents/UsersList";

export default function UsersListPage() {
  const [users, setUsers] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  // Fetch users initially and also when 'isUpdated' changes.
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((res) => {
        setUsers(res.data);
        setIsUpdated(false); // Reset the isUpdated state after fetching data
      })
      .catch((e) => console.error(e));
  }, [isUpdated]);

  return (
    <div className="h-[77vh] overflow-scroll">
      <UsersList users={users} setIsUpdated={setIsUpdated} />
    </div>
  );
}
