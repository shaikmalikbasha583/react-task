import React, { Component } from 'react';

const TechLead = ({ techLead, handleCurrentUser }) => {
	return (
		<div className='col-sm-6' onClick={() => handleCurrentUser(techLead)}>
			<div className='card'>
				<div className='card-body' align='center'>
					<p>{techLead.name}</p>
					<p>{techLead.id}</p>
					<p>{techLead.email}</p>
				</div>
			</div>
		</div>
	);
};

class TechLeads extends Component {
	handleCurrentUser = user => this.props.handler(user);

	render() {
		const { techLeads } = this.props;
		let techLeadsWrapper =
			techLeads !== undefined
				? techLeads.map(techLead => (
						<TechLead
							key={techLead.id}
							techLead={techLead}
							handleCurrentUser={this.handleCurrentUser}
						/>
				  ))
				: null;
		return (
			<div className='row'>
				<div className='col-sm-12'>
					<h4 align='center'>TechLeads List</h4>
				</div>
				{techLeadsWrapper}
			</div>
		);
	}
}

export default TechLeads;
