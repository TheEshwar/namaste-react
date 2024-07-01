import { LOGO_URL } from "../utils/constants";

const Header = () => {
	let bntName = "Login";
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} alt="" />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
					<button className="login-btn" onClick={()=>{
						bntName="Logout"
					}}>{btnName}</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
