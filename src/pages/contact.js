import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
	return (
		<Layout>
			<Head title="Contact" />
			<h1>Imagine an awesome Contact Page here</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
				voluptatem velit beatae minima nam, provident quasi omnis officia sequi
				doloremque enim excepturi, necessitatibus distinctio impedit illo.
				Cupiditate totam omnis illum, neque rem nisi ad quae! Ab ipsam minima
				quia pariatur necessitatibus omnis cum odit. Delectus at nemo laboriosam
				non iusto quaerat, est quidem incidunt optio voluptas et placeat ex quam
				ipsam soluta temporibus ipsa mollitia corrupti quos distinctio, ea
				facilis. Dolorem, cumque explicabo qui est nesciunt natus reiciendis
				minima, doloremque sapiente at voluptatibus debitis recusandae non
				ipsum, officia vitae hic repudiandae magni quia! Quia molestias aperiam
				quam amet dolorem reiciendis?
			</p>
			<hr />
			<Link to="/">Back to Home Page</Link>
		</Layout>
	)
}

export default ContactPage
