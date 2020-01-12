import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)
	const author = data.site.siteMetadata.author;
	return (
		<footer className={footerStyles.footer}>
			<p>Created by {author}, copyright {new Date().getFullYear()}</p>
		</footer>
	)
}

export default Footer
