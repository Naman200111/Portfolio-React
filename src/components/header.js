import React, { useState } from 'react'
import { BsList } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Header() {
	const [sidebarClass, setSideBarClass] = useState(false)
	const handleClick = () => {
		setSideBarClass(prevValue => !prevValue)
	}
	const sidebarStyle = {
		transform: sidebarClass ? "translateX(0%)" : "translateX(500%)"
	}
	return (
		<div className='header'>
			<div className='name'>Naman Agrawal</div>
			<div className="hamburger-icon">
				<BsList onClick={handleClick} className='list'/>
			</div>

			<div style={sidebarStyle} className='buttons buttons-sidebar'>
				<div className="bug-arrow-class">
					<AiOutlineArrowRight onClick={handleClick} className='list'/>
				</div>
				<a className='button-anchor' href='#home'><button onClick={handleClick}>Home</button></a>
				<a className='button-anchor' href='#about me'><button onClick={handleClick}>About Me</button></a>
				<a className='button-anchor' href='#experience'><button onClick={handleClick}>Experience</button></a>
				<a className='button-anchor' href='#projects'><button onClick={handleClick}>Projects</button></a>
				<a className='button-anchor' href='#skills'><button onClick={handleClick}>Skills</button></a>
				<a className='button-anchor' href='#contact me'><button onClick={handleClick}>Contact Me</button></a>
			</div>

			<div className='buttons'>
				<button><a className='button-anchor' href='#home'>Home</a></button>
				<button><a className='button-anchor' href='#about me'>About Me</a></button>
				<button><a className='button-anchor' href='#experience'>Experience</a></button>
				<button><a className='button-anchor' href='#projects'>Projects</a></button>
				<button><a className='button-anchor' href='#skills'>Skills</a></button>
				<button><a className='button-anchor' href='#contact me'>Contact Me</a></button>
			</div>
		</div>
	)
}