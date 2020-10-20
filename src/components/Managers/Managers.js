import React, { Component } from 'react';

const Manager = ({ manager, handleCurrentUser }) => {
	return (
		<div className='col-sm-6' onClick={() => handleCurrentUser(manager)}>
			<div className='card'>
				<div className='card-body' align='center'>
					<p>{manager.name}</p>
					<p>{manager.id}</p>
					<p>{manager.email}</p>
				</div>
			</div>
		</div>
	);
};

class Managers extends Component {
	handleCurrentUser = user => this.props.handler(user);

	render() {
		const { managers } = this.props;
		let managersWrapper =
			managers !== undefined
				? managers.map(manager => (
						<Manager
							key={manager.id}
							manager={manager}
							handleCurrentUser={this.handleCurrentUser}
						/>
				  ))
				: null;
		return (
			<div className='row'>
				<div className='col-sm-12'>
					<h4 align='center'>Managers List</h4>
				</div>
				{managersWrapper}
			</div>
		);
	}
}

export default Managers;
