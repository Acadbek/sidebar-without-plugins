import React from "react";
import { Route, Routes } from "react-router-dom";

const Friends = () => {
  return (
    <div>
      <Routes>
        <Route path="Friends/old-friends">old frrieds</Route>
        <Route path="Friends/new-friends">new frrieds</Route>
      </Routes>
    </div>
  );
};

export default Friends;
