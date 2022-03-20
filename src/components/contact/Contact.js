import React, { useRef, useState } from "react"
import "./contact.css"

import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from "emailjs-com"

const Contact = () => {
	const form = useRef()
	const [messageSent, setMessageSent] = useState(false)

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				"service_vvvdqzl",
				"template_ktmttgp",
				form.current,
				"ohkC6QkmLrdECVp8N"
			)
			.then(() => {
				e.target.reset()
				setMessageSent(true)
			})
			.catch((error) => {
				console.log(error)
				alert("An error occured while trying to send the message")
			})
	}
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>rayanballout14@gmail.com</h5>
						<a href="mailto:rayanballout14@gmail.com">
							Send A Message
						</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className="contact__option-icon" />
						<h4>Messenger</h4>
						<h5>Rayan Ballout</h5>
						<a href="https://m.me/rayan.ballout.9">
							Send A Message
						</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className="contact__option-icon" />
						<h4>Whatsapp</h4>
						<h5>+96170837274</h5>
						<a
							href="htpps://api.whatsapp.com/send?phone=+96170837274"
							target="_blank"
						>
							Send A Message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
					{messageSent && (
						<div className="message__success">
							Thank you! Your message has been recieved!
						</div>
					)}
				</form>
			</div>
		</section>
	)
}

export default Contact
