import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
	return (
		<Layout>
			<Head title="404" />
			<div>
				<h1>Sorry this page does not exist</h1>
				<p>Lorem Ipsum sorry</p>
				<p>
					<Link to="/">Go to Home Page</Link>
				</p>
			</div>
		</Layout>
	)
}

export default NotFound
