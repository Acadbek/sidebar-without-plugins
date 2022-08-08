import React, { useState } from 'react';
import './App.css';
import CollapseMenu from './components/collapse';
import Sidebar from './components/Sidebar';

function App() {
  const [active, setActive] = useState(false)
  return (
    <div className="App text-white flex gap-10">
      <div className={active ? 'w-14 ease-in-out duration-300 bg-black h-screen' : 'w-72 bg-black h-screen ease-in-out duration-300'}>
        <div className='flex items-center justify-between px-2 pt-2'>
          <div className='cursor-pointer' onClick={() => setActive(!active)}>logo</div>
          <button onClick={() => setActive(!active)} className={active ? 'hidden ease-in-out duration-700' : 'block ease-in-out duration-700'}>=</button>
        </div>
        <div className='flex gap-8 px-4'>
          <div className='mt-7'>
            <Sidebar />
          </div>
          <div className={active ? 'hidden ease-in-out duration-700' : 'flex flex-col gap-6 mt-[33px] ease-in-out duration-700'}>
            <CollapseMenu />
            <p>Google</p>
            <p>Figma</p>
            <p>Telegram</p>
            <p>Twitch</p>
            <p>YouTube</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Pinterest</p>
            <p>VK</p>
            <p>Spotify</p>
            <p>Discord</p>
          </div>
        </div>
      </div>
      <div className='w-full text-black'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium praesentium incidunt recusandae saepe cum dolorem impedit eligendi aut iure excepturi aperiam similique corporis, sequi suscipit, explicabo sunt rerum soluta!
      </div>
    </div>
  );
}

export default App;
