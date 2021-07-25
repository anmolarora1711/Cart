import React from "react";

const Navbar = (props) => {
	return (
		<div style={styles.nav}>
			<div style={styles.cartIconContainer}>
				<img
					style={styles.cartIcon}
					src=""
					alt="cart-icon"
					src="https://image.flaticon.com/icons/png/512/3144/3144456.png"
				/>
				<span style={styles.cartCount}>3</span>
			</div>
		</div>
	);
};

const styles = {
	cartIcon: {
		height: 32,
		marginRight: 20,
	},
	nav: {
		height: 70,
		background: "#4267b2",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	cartIconContainer: {
		position: "relative",
	},
	cartCount: {
		background: "yellow",
		borderRadius: "50%",
		padding: "4px 8px",
		position: "absolute",
		right: 0,
		top: -9,
	},
};

export default Navbar;
