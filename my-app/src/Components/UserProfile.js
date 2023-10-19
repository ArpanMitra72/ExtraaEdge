import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="user-avatar">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
          alt={`${user.username} avatar`}
        />
      </div>
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>
          Address: {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserProfile;
