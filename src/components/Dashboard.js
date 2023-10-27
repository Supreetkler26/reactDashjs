// src/components/Dashboard.js

import React, { useEffect, useState } from "react";


import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

function Dashboard() {

  return (
    <div>
      <h1>Dashboard</h1>

      {/* User Profile Information Widget */}
      {user && (
        <div>
          <h2>User Profile Information</h2>
          <p>Email: {user.email}</p>
          <p>Display Name: {user.displayName}</p>
          {/* Add more user information fields as needed */}
        </div>
      )}

      {/* User List Component Widget */}
      {/* Implement the User List component to fetch and display registered users */}
    </div>
  );
}

export default Dashboard;
