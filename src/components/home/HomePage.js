import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{

	render(){
		return(

			<div className="jumbotron">
				<h1>Practica de React y Redux</h1>
				<p>Testeando react con Redux y react router para crear una app</p>
				<Link to="about" className="btn btn-primary btn-large">Saber más</Link>
			</div>

		);
	}

}

export default HomePage;
