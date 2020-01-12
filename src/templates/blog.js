import React from 'react'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			id
			title
			slug
			publishedDate(formatString: "MMMM DD YYYY")
			body {
				json
			}
		}
	}
`

const Blog = ({ data }) => {
	const title = data.contentfulBlogPost.title
	const date = data.contentfulBlogPost.publishedDate
	const bodyJSON = data.contentfulBlogPost.body.json

	const options = {
		renderNode: {
			'embedded-asset-block': node => {
				const url = node.data.target.fields.file['en-US'].url
				const alt = node.data.target.fields.title['en-US']
				return <img src={url} alt={alt} />
			},
		},
	}

	return (
		<Layout>
			<Head title={title} />
			<h1>{title}</h1>
			<p>{date}</p>
			{documentToReactComponents(bodyJSON, options)}
			<Link to="/blog">Back to Blog Posts Overview</Link>
		</Layout>
	)
}

export default Blog
