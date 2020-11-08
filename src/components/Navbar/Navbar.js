import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const [links, setLinks] = useState([])
	useEffect(() => {
		fetch('/pages')
			.then((res) => res.json())
			.then((data) => {
				const main_links = []
				data.forEach((item) => {
					if (item.parent === 0) {
						main_links.push(item)
					}
				})
				setLinks(main_links)
			})

		console.log(links)
	}, [])
	return (
		<div className="header">
			<div className="header__navbar">
				<Link to="/" className="header__navbar_link">
					Blog
				</Link>
				<Link to="/gallery" className="header__navbar_link">
					Photo Gallery
				</Link>
				{links.length !== 0 ? (
					links.map((page_details) => (
						<Link
							className="header__navbar_link"
							to={`/show/page/${page_details.id}`}
							key={'link_id_' + page_details.id}
						>
							{page_details.title.rendered}
						</Link>
					))
				) : (
					<span></span>
				)}
			</div>

			<div className="header__user">
				<div className="header__user_login">Login</div>
			</div>
		</div>
	)
}

export default Navbar
