import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../../actions/productActions';

class ProductPage extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			product: {
				name: ""
			}
		};

		this.handleChange = this.handleChange.bind(this);
		this.saveProduct = this.saveProduct.bind(this);
	}

	handleChange(event) {
		const product = this.state.product;
		product.name = event.target.value;
		this.setState({product: product});
	}

	saveProduct(){
		this.props.actions.createProdut(this.state.product);
	}

	productRow(product, index){
		return(
			<div key={index}>
				{product.name}
			</div>
		);
	}

	render(){
		return(
			<div>
				<h1>Pagina de producto</h1>
					{this.props.products.map(this.productRow)}
				<h2>Agregar producto</h2>
				<input type="text"
					value={this.state.product.name}
					onChange={this.handleChange}
				/>

				<input type="submit"
				value="Enviar"
				onClick={this.saveProduct}
				/>
			</div>
		);
	}
}

ProductPage.propTypes = {
	products: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		products: state.products
	};
}

function mapDispatchToProps(dispatch) {
	return{
		actions: bindActionCreators(productActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
