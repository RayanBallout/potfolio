import React from "react"
import "./about.css"
import ME from "../../assets/square-img.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>1+ Years of Experience</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>10+ Clients Worldwide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>15+ Completed Projects</small>
						</article>
					</div>
					<p>
						I am a junior full stack web developer based in Lebanon.
						On the road and aspiring to be a senior full stack web
						developer. I am always in search for greater
						opportunities, and open to work or projects if it suits
						my capabilities.
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	)
}

export default About
