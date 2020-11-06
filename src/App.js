import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css'

class App extends Component{
	constructor(){
		super();
		this.state={
			robots : [],
			searchfield : ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => {
			return response.json()
		})
		.then(users => {
			this.setState({robots : users})
		});
	}

	onChangeRobots = (event) => {
		this.setState({searchfield : event.target.value});
	}


	render(){
		const newrobos = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		if(this.state.robots.length === 0){
			return(
				<h2 className='tc'>Loading...</h2>
			);
		}
		else{
			return(
				<div className='tc'>
					<h1 className='f2'>RoboFriends</h1>
					<SearchBox searchChange={this.onChangeRobots} />
					<Scroll>
						<CardList robots={newrobos} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;