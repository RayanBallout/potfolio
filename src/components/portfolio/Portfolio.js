import React, { useEffect, useState } from "react"
import "./portfolio.css"
import { FaGithub } from "react-icons/fa"

//firebase
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { db } from "../../firebase/config"

const Portfolio = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		const reference = collection(db, "projects")

		let results = []
		const unsubscribe = onSnapshot(reference, (snapshot) => {
			snapshot.forEach((doc) => {
				results.push({ id: doc.id, data: doc.data() })
			})
			setProjects(results)
		})

		return () => unsubscribe()
	}, [])

	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{projects &&
					projects.map((project) => {
						return (
							<article className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={project.data.imageURL} alt="" />
								</div>
								<h3>{project.data.title}</h3>
								<p>{project.data.description}</p>
								<div className="portfolio__items-cta">
									{project.data.github && (
										<a
											href={project.data.github}
											className="btn github__btn"
											target="_blank"
										>
											<FaGithub />
											Github
										</a>
									)}
									{project.data.web && (
										<a
											href={project.data.web}
											className="btn btn-primary"
											target="_blank"
										>
											Live Demo
										</a>
									)}
								</div>
							</article>
						)
					})}
			</div>
		</section>
	)
}

export default Portfolio
