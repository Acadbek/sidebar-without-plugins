import React, { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState(false)
  return (
    <div className="App text-white flex gap-10">
      <div className={active ? 'w-12 ease-in-out duration-300 bg-black h-screen' : 'w-72 bg-black h-screen ease-in-out duration-300'}>
        <div className='flex items-center justify-between px-2 pt-2'>
          <div className='cursor-pointer' onClick={() => setActive(!active)}>logo</div>
          <button onClick={() => setActive(!active)} className={active ? 'hidden' : 'block'}>=</button>
        </div>
      </div>
      <div className='w-full text-black'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium praesentium incidunt recusandae saepe cum dolorem impedit eligendi aut iure excepturi aperiam similique corporis, sequi suscipit, explicabo sunt rerum soluta!
      </div>
    </div>
  );
}

export default App;
