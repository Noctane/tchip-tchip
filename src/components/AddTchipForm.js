import React from 'react';

class AddTchipForm extends React.Component {
	createTchip(event) {
		event.preventDefault();
		const timestamp = (new Date(Date.now())).toLocaleString();
		const tchip = {
			tchip: this.tchip.value,
			date: timestamp
		}
		console.log(tchip);
		this.props.addTchip(tchip);
		// reset the form
		this.tchipForm.reset(0);
	}

	render() {
		return(
			<form className="tchip-form" ref={(input) => this.tchipForm = input} onSubmit={(e) => this.createTchip(e)}>
				<textarea ref={(input) => this.tchip = input} name="tchip" className="tchip-edit" placeholder="Quoi de neuf ?"></textarea>
				<button type="submit">Tchiper</button>
			</form>	
		)
	}
}

export default AddTchipForm;