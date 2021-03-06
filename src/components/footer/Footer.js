import React from "react"
import { FiInstagram } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

import "./footer.css"

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				Rayan Ballout
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#services">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://www.instagram.com/rayanballout14/">
					<FiInstagram />
				</a>
				<a href="https://www.linkedin.com/in/rayan-ballout/">
					<BsLinkedin />
				</a>
				<a href="https://github.com/RayanBallout">
					<BsGithub />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; Rayan Ballout. All rights reserved</small>
			</div>
		</footer>
	)
}

export default Footer
