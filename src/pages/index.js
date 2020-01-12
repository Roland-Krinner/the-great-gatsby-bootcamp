import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
	return (
		<Layout>
			<Head title="Home"/>
			<h1>Hello,</h1>
			<h2>I want to lean Gatsby!</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae,
				incidunt amet repellendus vitae reiciendis in consequuntur voluptas
				laborum adipisci deleniti iste ipsam! Voluptatibus libero fugit
				voluptates amet vel. Nam!
			</p>
			<p>Do you need a Developer?</p>
			<hr />
			<Link to="/contact">Contact me!</Link>
		</Layout>
	)
}

export default IndexPage
