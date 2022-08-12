import React, { useState, useEffect } from "react";

const SidebarMenu = ({ openWithLogos, data, isOpen, setIsOpen }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isOpenModal, setOpenModal] = useState(false);
	const [selected, setSelected] = useState(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		setIsOpen(true);
	};

	// const openWithLogos = (val) => {
	//   setSelected(val);
	//   setOpenModal(true);
	// };
	// console.log(selected);

	useEffect(() => {
		if (!isOpen) {
			setIsMenuOpen(false);
		}
	}, [isOpen]);
	return (
		<>
			<div className="flex gap-3 pt-3 pb-2 w-[350px] shadow px-2">
				<div className="flex cursor-pointer">
					<img
					className="ml-1"
						id={data.title}
						onClick={openWithLogos}
						width={35}
						height={35}
						src={data?.icon}
						alt=""
						style={{ zIndex: "999999" }}
					/>
					<p onClick={toggleMenu} className="text ml-6 select-none">
						{data?.title}
					</p>
				</div>
				<span
					onClick={toggleMenu}
					className={
						isMenuOpen
							? "rotate-90 ease-in-out duration-300"
							: "ease-in-out duration-300"
					}
				>
					{">"}
				</span>
			</div>
			{isMenuOpen && (
				<>
					{data.additionalLinks.map((item, i) => (
						<div key={i} className="flex cursor-pointer ">
							<p className="ml-[70px] text-[18px] select-none mt-1">
								{item?.title}
							</p>
						</div>
					))}
				</>
			)}
		</>
	);
};

export default SidebarMenu;
