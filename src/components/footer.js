import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
	return (
		<div className='footer'>
			<div className="footer-header">
				<h2>Let's Get in Touch</h2>
			</div>
			<div className="footer-content">
				<p>Always waiting for getting an opportunity to get in touch with you. I will try to get back to you as soon as possible. Let make something big together.</p>
			</div>
			<div className="footer-links">
				<a className='social-media-anchor link' href="https://github.com/Naman200111">
					<SiGithub className='icon'/>
				</a>
				<a className='social-media-anchor link' href="https://www.linkedin.com/in/naman-agrawal-1b53151b0/">
					<SiLinkedin className='icon'/>
				</a>
				<a className='social-media-anchor link' href="https://twitter.com/NamaNAgR_15">
					<SiTwitter className='icon'/>
				</a>
				<a className='social-media-anchor link' href="https://leetcode.com/naman_agr/">
					<SiLeetcode className='icon'/>
				</a>
			</div>


			<div className="footer-ending">
				<p>Build and Designed by Naman Agrawal</p>
				{/* <div class="code-reference"> */}
					<a className='code-reference' href="https://github.com/Naman200111/Portfolio-React">
						<SiGithub />
						<p>Github</p>
					</a>
				{/* </div> */}
			</div>

		</div>
	)
}