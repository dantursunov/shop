import {Facebook, Instagram, Twitter, Youtube} from "../icons";

const Footer = () => (
	<div className="footer bg-black p-6 text-red-300">
		<div className="container mx-auto">
			<div className="footer-text flex-none md:flex items-center justify-between">
				<p>© Onzombie 2021</p>
				<p className="text-gray">Be prepared for any situation</p>
				<span className="text-gray">Follow on social links to support the work</span>
			</div>
			<ul className="social-links mt-8 flex align-center">
				<li><a href="https://www.facebook.com" className="fa fa-facebook" target="_blank"><Facebook/></a></li>
				<li className="ml-2 mt-1"><a href="https://twitter.com" target="_blank"><Twitter/></a></li>
				<li className="ml-2 mt-1"><a href="https://youtube.com" className="fa fa-youtube" target="_blank"><Youtube/></a></li>
				<li className="ml-2"><a href="https://www.instagram.com" className="fa fa-instagram" target="_blank"><Instagram/></a></li>
			</ul>
		</div>
	</div>
);

export default Footer;
