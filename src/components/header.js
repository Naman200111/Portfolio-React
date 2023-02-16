import React, { useState } from 'react'
import { BsList } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Sidebar from './Sidebar'

export default function Header() {
	const [show, setShow] = useState(false)

	const handleClick = () => {
		setShow(prevShow => !prevShow)
	}
	const showList = () => {
		return (
			show 
			?
			<div className='sidebar-par'>
				<AiOutlineArrowRight onClick={handleClick} className='arrow'/>
				<Sidebar />
			</div>
			:
			<BsList onClick={handleClick} className='list'/>
		)
	}
	return (
		<div className='header'>
			<div className='name'>Naman Agrawal</div>
			<div className='buttons'>
				<button><a href='#home'>Home</a></button>
				<button><a href='#about me'>About Me</a></button>
				<button><a href='#experience'>Experience</a></button>
				<button><a href='#projects'>Projects</a></button>
				<button><a href='#skills'>Skills</a></button>
				<button><a href='#contact me'>Contact Me</a></button>
			</div>
			{showList()}
		</div>
	)
}