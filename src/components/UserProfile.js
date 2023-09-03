import React from "react";
import { Link } from "react-router-dom";

function UserProfile({ user, onLogout }) {
  return (
    <div>
      <h2>Welcome, {user ? user.username : "Guest"}!</h2>
      <Link to="/">Home</Link>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
