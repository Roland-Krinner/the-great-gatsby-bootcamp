import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
	// const data = useStaticQuery(graphql`
	// 	query {
	// 		allMarkdownRemark {
	// 			edges {
	// 				node {
	// 					frontmatter {
	// 						title
	// 						date
	// 					}
	// 					html
	// 					excerpt
	// 					fields {
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `)
	// const edges = data.allMarkdownRemark.edges

	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						id
						title
						slug
						publishedDate(formatString: "MMMM DD YYYY")
					}
				}
			}
		}
	`)
	const edges = data.allContentfulBlogPost.edges

	return (
		<Layout>
			<Head title="Blog Posts" />
			<h1>Blog</h1>
			<p>Have a look at your current Blog Posts.</p>
			<hr />
			<ol className={blogStyles.posts}>
				{edges.map((post, idx) => {
					return (
						<li className={blogStyles.post} key={idx}>
							<Link to={`/blog/${post.node.slug}`}>
								<h2>
									{post.node.title} |{' '}
									<small>{post.node.publishedDate}</small>
								</h2>
								{/* <p>{post.node.excerpt}</p> */}
								<span>Read More</span>
							</Link>
						</li>
					)
				})}
			</ol>
			<Link to="/">Back to Home Page</Link>
		</Layout>
	)
}

export default BlogPage
