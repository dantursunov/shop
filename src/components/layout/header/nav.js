import Link from 'next/link';
import CartIcon from "../../cart/CartIcon";
import { useState } from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import NavSearch from '../../search/nav-search';

const Nav = ({ header, headerMenus, slug }) => {

	if (isEmpty(headerMenus)) {
		return null;
	}

	const [isMenuVisible, setMenuVisibility] = useState(false);

	return (
		<nav className="nav p-4">
			<div className="flex items-center justify-between flex-wrap container mx-auto">

				<div className="flex items-center flex-shrink-0 text-black mr-20">
					<span className="font-semibold text-xl tracking-tight">
						<Link href="/">
							<a>
								<img src={header?.siteLogoUrl ?? ''} alt="" width="48" height="48" className="mr-4" />
							</a>
						</Link>
						<div className="flex flex-col items-start justify-start">
							<span className="font-semibold text-xl tracking-tight">{header?.siteTitle}</span>
							<span>{header?.siteTagLine}</span>
						</div>
					</span>
				</div>

				{/*Menu button*/}
				<div className="block lg:hidden">
					<button onClick={() => setMenuVisibility(!isMenuVisible)} className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
					</button>
				</div>

				{/*MMenu in mobile*/}
				<div className={`${isMenuVisible ? 'max-h-full h-full' : 'h-0'} w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
				{headerMenus?.length ? (
					<div className="text-sm lg:flex-grow">
						{headerMenus?.map(menu => {
							if (!isCustomPageUri(menu?.node?.path)) {
								return (
									<Link key={menu?.node.id} href={menu?.node?.path}>
										<a
											className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
											data-cy="nav-item"
										>
											{menu?.node?.label}
										</a>
									</Link>
								);
							}
						})}
						<Link href="/categories">
							<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
								Categories
							</a>
						</Link>
						<Link href={'/blog/'}>
							<a
								className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
								data-cy="nav-item"
							>
								Blog
							</a>
						</Link>
						<Link href={'/news/'}>
							<a
								className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
								data-cy="nav-item"
							>
								News
							</a>
						</Link>
					</div>
				) : null}
				<div className="flex-col-reverse flex lg:flex-row">
					{'search' !== slug ? <NavSearch /> : null}
					<CartIcon />
					<div className="lg:flex items-center">
						<a href="#"
							className="lg:ml-2 inline-block text-sm px-4 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
							Contact
						</a>
					</div>
				</div>
				</div>

			</div>
		</nav>
	)
};

Nav.propTypes = {
	header: PropTypes.object,
	headerMenus: PropTypes.array,
	slug: PropTypes.string
};

Nav.defaultProps = {
	header: {},
	headerMenus: [],
	slug: ''
};

export default Nav;
