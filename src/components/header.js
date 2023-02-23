import React from 'react'

export default function Header() {
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
		</div>
	)
}