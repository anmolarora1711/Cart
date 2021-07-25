import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [
				{
					price: 99,
					title: "Watch",
					qty: 1,
					img: "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1037&q=80",
					id: 1,
				},
				{
					price: 999,
					title: "Mobile Phone",
					qty: 10,
					img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=316&q=80",
					id: 2,
				},
				{
					price: 999,
					title: "Laptop",
					qty: 4,
					img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80",
					id: 3,
				},
			],
		};
	}
	handleIncreaseQuantity = (product) => {
		console.log("Heyy please increase the qty of ", product);
		const { products } = this.state;
		const index = products.indexOf(product);
		products[index].qty += 1;
		this.setState({
			products: products,
		});
	};
	handleDecreaseQuantity = (product) => {
		console.log("Heyy please decrease the qty of ", product);
		const { products } = this.state;
		const index = products.indexOf(product);

		if (products[index].qty === 0) {
			return;
		}
		products[index].qty -= 1;
		this.setState({
			products: products,
		});
	};
	handleDeleteProduct = (id) => {
		const { products } = this.state;
		const items = products.filter((item) => item.id !== id); // [{}]
		this.setState({
			products: items,
		});
	};
	getCartCount = () => {
		const { products } = this.state;
		let count = 0;

		products.forEach((product) => {
			count += product.qty;
		});
		// console.log(count);
		return count;
	};
	getCartTotal = () => {
		const { products } = this.state;
		let cartTotal = 0;
		products.map((product) => {
			cartTotal = cartTotal + product.qty * product.price;
		});
		return cartTotal;
	};
	render() {
		const { products } = this.state;
		return (
			<div className="App">
				<Navbar count={this.getCartCount()} />
				<Cart
					products={products}
					onIncreaseQuantity={this.handleIncreaseQuantity}
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteProduct={this.handleDeleteProduct}
				/>
				<div style={{ padding: 10, fontSize: 20 }}>
					Total: {this.getCartTotal()}
				</div>
			</div>
		);
	}
}

export default App;
