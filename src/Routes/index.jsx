import React from "react";
import { Routes, Route } from "react-router-dom";

import Safety from "../pages/Safety";
import Community from "../pages/Community";
import Connect from "../pages/Connect";
import Friends from "../pages/Friends";
import Nitro from "../pages/Nitro";
import Photos from "../pages/Photos";
import Pinterest from "../pages/Pinterest";
import Recents from "../pages/Recents";
import Settings from "../pages/Settings";
import Spotify from "../pages/Spotify";
import Support from "../pages/Support";
import Telegram from "../pages/Telegram";
import Twitch from "../pages/Twitch";
import Users from "../pages/Users";
import World from "../pages/World";
import Drafts from "../pages/Drafts";

const Root = () => {
  return (
    <Routes>
      <Route path="Safety" element={<Safety />} />
      <Route path="Community" element={<Community />} />
      <Route path="Connect" element={<Connect />} />
      <Route path="Friends" element={<Friends />} />
      <Route path="Nitro" element={<Nitro />} />
      <Route path="Photos" element={<Photos />} />
      <Route path="Pinterest" element={<Pinterest />} />
      <Route path="Recents" element={<Recents />} />
      <Route path="Settings" element={<Settings />} />
      <Route path="Spotify" element={<Spotify />} />
      <Route path="Support" element={<Support />} />
      <Route path="Telegram" element={<Telegram />} />
      <Route path="Twitch" element={<Twitch />} />
      <Route path="Users" element={<Users />} />
      <Route path="World" element={<World />} />
      <Route path="Drafts" element={<Drafts />} />
    </Routes>
  );
};

export default Root;
