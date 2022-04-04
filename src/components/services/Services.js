import React from "react"
import "./services.css"
import { BiCheck } from "react-icons/bi"

const Services = () => {
	return (
		<section id="services">
			<h5>What I Offer</h5>
			<h2>Services</h2>
			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>Frontend Development</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Develop frontend for websites from a psd or
								sketch files
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Develop responsive websites to accomodate all
								screens
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Develop using React.js framework or pure HTML
								and CSS
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Gatsby and Graphql implementations</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Using bootstrap CSS framework for mobile first
								approach
							</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Backend Development</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								WodPress backend development for a custom theme
								implementation
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Development using MongoDB, Express and Node.js
								(MERN stack)
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>
								Database structuring according to specifications
							</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Develop PHP MVC application</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Develop using Google Firebase BAAS</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Website Management</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Content management for already found websites</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Website maintenance</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>WordPress elementor theme development</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Website uplifting</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Premade template implementation</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	)
}

export default Services
