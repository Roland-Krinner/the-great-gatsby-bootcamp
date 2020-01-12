const path = require('path')

// this is only needed to create slugs out of MD files
// module.exports.onCreateNode = ({ node, actions }) => {
// 	const { createNode, createNodeField } = actions

// 	if (node.internal.type === 'MarkdownRemark') {
// 		//console.log(JSON.stringify(node, undefined, 4))
// 		const slug = path.basename(node.fileAbsolutePath, '.md')
// 		createNodeField({
// 			node,
// 			name: 'slug',
// 			value: slug,
// 		})
// 	}
// }

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve(`src/templates/blog.js`)
	// this function returns a promise
	// const res = await graphql(`
	// 	query {
	// 		allMarkdownRemark {
	// 			edges {
	// 				node {
	// 					fields {
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `)

	const res = await graphql(`
		query {
			allContentfulBlogPost {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)

	res.data.allContentfulBlogPost.edges.forEach(edge => {
		createPage({
			component: blogPostTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
			},
		})
	})

	// 1. Get path to template
	// 2. Get markdown data
	// 3. Create new pages

	// steps:
	// -> fetch data (GraphQL)
	// -> Pass Data to Template
	// -> Transform HTML with Template
	// -> save static file

	// Query for markdown nodes to use in creating pages.
	// You can query for whatever data you want to create pages for e.g.
	// products, portfolio items, landing pages, etc.
	// Variables can be added as the second function parameter
}
