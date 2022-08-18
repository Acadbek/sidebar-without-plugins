import React, { useState, useContext } from 'react';
import './App.css';
import Card from './components/Card';
import MenuItem from './components/MenuItem';

import Modal from './components/Modal';
import { Context } from './context'
function App() {
	const [menus, setMenus, data, setdata] = useContext(Context);
	const [active, setActive] = useState(false);
	const [isOpen, setIsOpen] = useState(true);
	const [selected, setSelected] = useState(null);
	const [modal, setModal] = useState(false)
	const [inputVl, setInputVl] = useState('')
	const [loading, setLoading] = useState(true)
	console.log(data, 'data');

	const toggle = () => setIsOpen(!isOpen);
	const closeBtn = () => {
		setActive(true)
		setIsOpen(false)
		setTimeout(() => {
			setModal(true)
		}, 1000);
	}
	const toggleWithLogo = () => {
		setActive(false)
		setIsOpen(true)
		setModal(false)
	}

	const openWithLogos = (val) => {
		setSelected(val)
	}

	return (
		<div className="App bg-slate-200 text-white flex">
			<div className={active ? 'w-16 ease-in-out duration-300 bg-white text-black h-screen' : 'w-[350px] bg-white text-black h-screen ease-in-out duration-300 bg-gradient-to-bl	'}>
				<div className='flex items-center justify-between px-2 pt-2'>
					<div className='cursor-pointer' onClick={toggleWithLogo}>
						<h1 className='text-[25px] first-letter:text-blue-400 select-none' style={{ fontFamily: 'Silkscreen' }}>zemcodes</h1>
					</div>
					<button onClick={closeBtn}
						className={active ?
							'hidden ease-in-out duration-700'
							:
							'bg-white shadow-lg shadow-black/50 px-1 rounded-md block ease-in-out duration-700'}>
						<svg
							width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.1565 16.7188L6.25024 12.8125L6.25024 11.7187L10.1565 7.8125L11.2659 8.90625L8.70337 11.4844L17.4065 11.4844L17.4065 13.0469L8.70337 13.0469L11.2815 15.625L10.1565 16.7188Z" fill="#424242" />
						</svg>
					</button>
				</div>
				<div className='flex !w-[350px]'>
					<div className='mt-3'>
						<section className="!w-full">
							{menus.map((item, index) => {
								if (item?.additionalLinks) {
									return (
										<>
											<MenuItem
												key={index}
												setIsOpen={setIsOpen}
												data={item}
												isOpen={isOpen}
												openWithLogos={() => setSelected(item)}
											/>
											{modal
												? <div className={`absolute top-${item?.top} left-[70px] ease-in-out duration-300`}>
													{selected?.title === item?.title ? <Modal key={item?.title} data={item?.additionalLinks} /> : ''}
												</div>
												: ''}
										</>
									);
								}
								return (
									<>
										<div
											key={index}
											className="w-full flex py-3 shadow"
										>
											<img className='ml-3' onClick={() => setSelected(item)} width={35} height={35} src={item?.icon} alt="" />
											{isOpen && (
												<p className='text ml-6 select-none'>
													{item?.title}
												</p>
											)}
										</div>
										<div className={`absolute top-${item?.top} left-[70px] ease-in-out duration-300`}>
											{modal
												? <div className={`absolute top-${item?.top} left-[70px] ease-in-out duration-300`}>
													{selected?.title === item?.title ? <Modal key={item?.title} data={item?.additionalLinks} /> : ''}
												</div>
												: ''}
										</div>
									</>
								);
							})}
						</section>
					</div>
				</div>
			</div>
			<div className='w-full text-black bg-slate-200 pl-8'>
				<div className='flex justify-between items-center py-[12px]'>
					<input placeholder='Search...' onChange={({ target }) => setInputVl(target.value.toLocaleLowerCase())} type="text" className='w-[574px] h-[32px] border outline-none px-2 py-2 border-blue-400' />
					<div className='flex gap-2'>
						<span>icon</span>
						<span>icon</span>
						<span>icon</span>
					</div>
				</div>
				{!data ? <h1 className='text-black flex items-center justify-center h-screen text-2xl'>Loading...</h1> :
					<div className='grid grid-cols-12 gap-4'>
						{data?.map((item) => item?.name.toLowerCase().includes(inputVl) && (
							<div key={item?.id} className='col-span-3'>
								<Card img={item?.url} avatar={item?.url} title={item?.name} name={item?.user} date={item?.id} />
							</div>
						))}
					</div>
				}
			</div>
		</div >
	);
}

export default App;
