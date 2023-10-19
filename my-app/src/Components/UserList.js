// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setUserList, setLoading } from "../Redux/actions";
// import UserProfile from "./UserProfile";

// const UserList = () => {
//   const dispatch = useDispatch();
//   const { userList, loading } = useSelector((state) => state);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         dispatch(setLoading(true));
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         const data = await response.json();
//         dispatch(setUserList(data));
//         dispatch(setLoading(false));
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         dispatch(setLoading(false));
//       }
//     };
//     fetchData();
//   }, [dispatch]);

//   return (
//     <div>
//       {loading ? (
//         <div className="loading-indicator">
//           <p>Loading...</p>
//         </div>
//       ) : (
//         <div>
//           {userList.map((user) => (
//             <UserProfile key={user.id} user={user} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserList;

// UserList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserList, setLoading } from "../Redux/actions";
import UserProfile from "./UserProfile";

const UserList = () => {
  const dispatch = useDispatch();
  const { userList, loading } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        dispatch(setUserList(data));
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch(setLoading(false));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className="loading-indicator">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {userList.map((user) => (
            <UserProfile key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
