import React, { Component } from 'react';
import { employees, techLeads, managers } from '../../data/dummyData';
import Managers from '../Managers/Managers';
import TechLeads from '../TechLeads/TechLeads';
import Employees from '../Employees/Employees';
import { connect } from 'react-redux';
import { getManagersListAction } from '../../redux/actions/ManagerActions';
import { getTechLeadsListAction } from '../../redux/actions/TechLeadActions';
import { getEmployeesListAction } from '../../redux/actions/EmployeeActions';

const mapStateToProps = state => {
	return {
		managers: state.getManagersListReducers.managers,
		techLeads: state.getTechLeadsListReducers.techLeads,
		employees: state.getEmployeessListReducers.employees
	};
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeUser: {}
		};
	}

	componentDidMount() {
		this.props.getManagersListAction(managers);
		this.props.getTechLeadsListAction(techLeads);
		this.props.getEmployeesListAction(employees);
	}

	handleCurrentUser = user => this.setState({ activeUser: user });

	render() {
		return (
			<div className='container-fluid' style={{ marginTop: 20 }}>
				<div className='row'>
					<div className='col-sm-8'>
						<Managers
							managers={this.props.managers}
							handler={this.handleCurrentUser}
						/>
						<TechLeads
							techLeads={this.props.techLeads}
							handler={this.handleCurrentUser}
						/>
						<Employees
							employees={this.props.employees}
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
									<b>Role: </b>{' '}
									<span className='text text-primary'>
										{this.state.activeUser.role}
									</span>
								</p>
								<p>
									<b>Email: </b>{' '}
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

export default connect(mapStateToProps, {
	getManagersListAction,
	getTechLeadsListAction,
	getEmployeesListAction
})(App);
