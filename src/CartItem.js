import React from "react";

class CartItem extends React.Component {
	constructor() {
		super();
		this.state = {
			price: 999,
			title: "Phone",
			qty: 1,
			img: "",
		};
		// this.testing();
	}

	// testing() {
	//     const promise = new Promise((resolve, reject) => {
	//         setTimeout(() => {
	//             resolve("done");
	//         }, 5000);
	//     });

	// promise.then((result) => {
	//     // setState acts like a synchronous call
	//     console.log(result);
	//     this.setState({ qty: this.state.qty + 10 });
	//     this.setState({ qty: this.state.qty + 10 });
	//     this.setState({ qty: this.state.qty + 10 });

	//     console.log("state", this.state);
	// });
	// }
	increaseQuantity = () => {
		// this.state.qty += 1;
		// console.log(this.state);
		// setState form 1 (If previous state doesn't required)
		// this.setState({
		// 	qty: this.state.qty + 1,
		// });

		// setState form 2 (If previous state required)
		this.setState((prevState) => {
			return {
				qty: prevState.qty + 1,
			};
		});
	};

	decreaseQuantity = () => {
		const { qty } = this.state;

		if (qty === 0) {
			return;
		}
		this.setState((prevState) => {
			return {
				qty: prevState.qty - 1,
			};
		});
	};

	render() {
		const { price, title, qty } = this.state;
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.image} alt="" />{" "}
				</div>{" "}
				<div className="right-block">
					<div style={{ fontSize: 25 }}> {title} </div>{" "}
					<div style={{ color: "#777" }}> Rs {price} </div>{" "}
					<div style={{ color: "#777" }}> Qty: {qty} </div>{" "}
					<div className="cart-item-actions">
						{" "}
						{/* Buttons */}{" "}
						<img
							alt="increase"
							className="action-icons"
							src="https://image.flaticon.com/icons/png/512/992/992651.png"
							onClick={this.increaseQuantity}
						/>{" "}
						<img
							alt="decrease"
							className="action-icons"
							src="https://image.flaticon.com/icons/png/512/992/992683.png"
							onClick={this.decreaseQuantity}
						/>{" "}
						<img
							alt="delete"
							className="action-icons"
							src="https://image.flaticon.com/icons/png/512/3096/3096687.png"
							onClick={this.delete}
						/>{" "}
					</div>{" "}
				</div>{" "}
			</div>
		);
	}
}

const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 4,
		backgroundColor: "#ccc",
	},
};

export default CartItem;
