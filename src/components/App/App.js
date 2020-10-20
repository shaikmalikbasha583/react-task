import React, { Component } from 'react';
import { employees, techLeads, managers } from '../../data/dummyData';
import Managers from '../Managers/Managers';
import TechLeads from '../TechLeads/TechLeads';
import Employees from '../Employees/Employees';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeUser: {},
			data: {}
		};
	}

	componentDidMount() {
		this.setState({
			data: {
				employees,
				techLeads,
				managers
			}
		});
	}

	handleCurrentUser = user => this.setState({ activeUser: user });

	render() {
		return (
			<div className='container-fluid' style={{ marginTop: 20 }}>
				<div className='row'>
					<div className='col-sm-8'>
						<Managers
							managers={this.state.data.managers}
							handler={this.handleCurrentUser}
						/>
						<TechLeads
							techLeads={this.state.data.techLeads}
							handler={this.handleCurrentUser}
						/>
						<Employees
							employees={this.state.data.employees}
							handler={this.handleCurrentUser}
						/>
					</div>
					<div className='col-sm-4'>
						<div className='card'>
							<div align='center'>
								<img
									className='img img-thumbnail'
									src='https://www.flaticon.com/svg/static/icons/svg/149/149071.svg'
									width='100'
									height='100'
									alt=''
								/>
							</div>
							<div className='card-body'>
								<p>
									<b>Name: </b>{' '}
									<span className='text text-primary'>
										{this.state.activeUser.name}
									</span>
								</p>
								<p>
									<b>Id: </b>{' '}
									<span className='text text-primary'>
										{this.state.activeUser.id}
									</span>
								</p>
								<p>
									<b>Name: </b>{' '}
									<span className='text text-primary'>
										{this.state.activeUser.role}
									</span>
								</p>
								<p>
									<b>Name: </b>{' '}
									<span className='text text-primary'>
										{this.state.activeUser.email}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
