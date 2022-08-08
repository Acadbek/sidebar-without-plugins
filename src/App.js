import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  const [active, setActive] = useState(false)

  // const open = () => {
  //   console.log('div open');
  // }

  const openWithBtn = () => {
    console.log('Open with btn');
  }

  return (
    <div className="App text-white flex">
      <div className={active ? 'w-16 ease-in-out duration-300 text-black h-screen' : 'w-[350px] bg-white text-black h-screen ease-in-out duration-300'}>
        <div className='flex items-center justify-between px-2 pt-2'>
          <div className='cursor-pointer' onClick={() => setActive(!active)}>logo</div>
          <button onClick={() => setActive(!active)} className={active ? 'hidden ease-in-out duration-700' : 'bg-white shadow-lg shadow-black/50 px-1 rounded-md block ease-in-out duration-700'}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1565 16.7188L6.25024 12.8125L6.25024 11.7187L10.1565 7.8125L11.2659 8.90625L8.70337 11.4844L17.4065 11.4844L17.4065 13.0469L8.70337 13.0469L11.2815 15.625L10.1565 16.7188Z" fill="#424242" />
            </svg>
          </button>
        </div>
        <div className='flex gap-8 pl-4 w-full'>
          <div className='mt-7'>
            <Sidebar textOpen={active ? true : false} />
          </div>
        </div>
      </div>
      <div className='w-full text-black bg-slate-200'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium praesentium incidunt recusandae saepe cum dolorem impedit eligendi aut iure excepturi aperiam similique corporis, sequi suscipit, explicabo sunt rerum soluta!
      </div>
    </div>
  );
}

export default App;
