import React, { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import img from './assets/svg/discord.svg'
import img2 from './assets/svg/facebook.svg'
import img3 from './assets/svg/figma.svg'
import img4 from './assets/svg/google.svg'
import img5 from './assets/svg/linkedin.svg'
import img6 from './assets/svg/pinterest.svg'
import img7 from './assets/svg/spotify.svg'
import img8 from './assets/svg/telegram.svg'
import img9 from './assets/svg/twitch.svg'
import logo from './assets/image/logoo.png'
import Modal from './components/Modal';

function App() {
	const [active, setActive] = useState(false);
	const [isOpen, setIsOpen] = useState(true);
	const [selected, setSelected] = useState(null);
	const [modal, setModal] = useState(false)

	const toggle = () => setIsOpen(!isOpen);
	const data = [
		{
			title: "Discord",
			icon: img,
			// top: '80',
			additionalLinks: [
				{
					title: "Nitro",
				},
				{
					title: "Safety",
				},
				{
					title: "Support",
				},
			],
		},
		{
			title: "Facebook",
			icon: img2,
			additionalLinks: [
				{
					title: "Connect ",
				},
				{
					title: "Friends",
				},
				{
					title: "World",
				},
			],
		},
		{
			title: "Figma",
			icon: img3,
			additionalLinks: [
				{
					title: "Recents ",
				},
				{
					title: "Drafts",
				},
				{
					title: "Community",
				},
			],
		},
		{
			title: "Google",
			icon: img4,
			additionalLinks: [
				{
					title: "Photos ",
				},
				{
					title: "Users",
				},
				{
					title: "Settings",
				},
			],
		},
		{
			title: "Twitch",
			icon: img9,
			additionalLinks: [
				{
					title: "Photos ",
				},
				{
					title: "Users",
				},
				{
					title: "Settings",
				},
			],
		},
		{
			title: "Pinterest",
			icon: img6
		},
		{
			title: "Telegram",
			icon: img8,
		},
		{
			title: "Spotify",
			icon: img7
		},
	];
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
						{/* <img width={150} src='' alt="LOGO" /> */}
						<h1 className='text-[25px] first-letter:text-blue-400' style={{ fontFamily: 'Silkscreen' }}>ZemCodes</h1>
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
							{data.map((item, index) => {
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
													{selected?.title === item.title ? <Modal key={item?.title} data={item?.additionalLinks} /> : ''}
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
										<div className={`absolute top-${item.top} left-[70px] ease-in-out duration-300`}>
											{modal
												? <div className={`absolute top-${item?.top} left-[70px] ease-in-out duration-300`}>
													{selected?.title === item.title ? <Modal key={item?.title} data={item?.additionalLinks} /> : ''}
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
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium praesentium incidunt recusandae saepe cum dolorem impedit eligendi aut iure excepturi aperiam similique corporis, sequi suscipit, explicabo sunt rerum soluta!
			</div>
		</div >
	);
}

export default App;
