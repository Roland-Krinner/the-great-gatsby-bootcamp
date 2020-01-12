import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" />
			<h1>This is the About Page</h1>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt molestiae totam fugiat expedita, quia numquam error porro illo excepturi nemo fugit corrupti culpa magni beatae? Doloribus voluptatem ex corrupti accusantium quis! Quia quod id provident blanditiis ratione excepturi itaque sint!</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab sint repellendus rerum praesentium laboriosam obcaecati ex corporis quasi itaque! Ipsum ducimus nobis minima commodi dolore praesentium autem veniam accusamus non? Itaque ipsa quis architecto asperiores, eveniet aut reiciendis eaque explicabo nemo accusamus, laboriosam iure consequuntur sint cum deserunt? Ipsum maiores eligendi, iusto repellat nam laudantium quia deleniti maxime ratione et, molestias, distinctio sit vero nobis id ea qui totam? Sapiente tempore cum accusantium nemo delectus doloremque. Accusamus, modi voluptates? Minus hic aliquid facere, deserunt debitis ex voluptatem consequatur nam commodi impedit inventore non facilis provident dolor porro pariatur modi nihil ea. Minima blanditiis ex consequuntur minus, adipisci perspiciatis quisquam est inventore impedit similique molestias quas laborum, repudiandae ipsam delectus accusamus facere eaque hic deserunt. Omnis impedit perspiciatis rem quam quia facilis quasi libero. Quod tenetur corporis neque! At in sunt soluta excepturi esse quaerat! Voluptates necessitatibus perspiciatis ratione esse dolorum deserunt reiciendis laudantium eligendi, eos consequatur vitae expedita accusamus incidunt consectetur odit beatae hic ipsam quasi possimus facere distinctio nostrum sequi quae? At odit minima nam quod laudantium debitis! Exercitationem temporibus iste laboriosam commodi necessitatibus tempora soluta esse similique ullam quisquam maxime aliquam voluptatum, distinctio quis? Suscipit aspernatur, dicta possimus excepturi unde eligendi esse! Doloremque amet culpa eius esse corrupti neque earum voluptatem in sed vero! Cum veniam, vel ut ullam pariatur ipsa consequuntur architecto ad exercitationem, porro beatae, adipisci voluptates ipsum asperiores repellat natus et provident consequatur doloribus officia voluptatibus. Pariatur quo ex cupiditate. Distinctio voluptate aliquid odio neque, assumenda molestias. Consequuntur tempore, praesentium expedita cum est reiciendis officia perferendis? Accusamus, vero beatae. Itaque cumque voluptas sapiente asperiores, quo obcaecati, eius maiores ullam nulla, deserunt aperiam sint quisquam. Dolores optio laudantium architecto voluptates accusantium repellat non autem praesentium. Nostrum amet perspiciatis possimus atque necessitatibus consequatur asperiores minus harum!</p>
			<hr />
			<Link to="/contact">Contact Page</Link>
			<hr />
			<Link to="/">Back to Home Page</Link>
		</Layout>
	)
}

export default AboutPage