import React, { Component } from 'react';

const Employee = ({ employee, handleCurrentUser }) => {
	return (
		<div className='col-sm-6' onClick={() => handleCurrentUser(employee)}>
			<div className='card'>
				<div className='card-body' align='center'>
					<p>{employee.name}</p>
					<p>{employee.id}</p>
					<p>{employee.email}</p>
				</div>
			</div>
		</div>
	);
};

class Employees extends Component {
	handleCurrentUser = user => this.props.handler(user);

	render() {
		const { employees } = this.props;
		let employeesWrapper =
			employees !== undefined
				? employees.map(employee => (
						<Employee
							key={employee.id}
							employee={employee}
							handleCurrentUser={this.handleCurrentUser}
						/>
				  ))
				: null;
		return (
			<div className='row'>
				<div className='col-sm-12'>
					<h4 align='center'>Employees List</h4>
				</div>
				{employeesWrapper}
			</div>
		);
	}
}

export default Employees;
