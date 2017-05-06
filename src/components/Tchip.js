import React from 'react';

class Tchip extends React.Component {
	constructor() {
		super()
		this.state = {
			likes: 0
		}
	}
	incrementLikes(event) {
		event.preventDefault();
		let likes = this.state.likes;
		likes += 1;
		this.setState({ likes });
	}

	render() {

		const {details} = this.props;

		return(
				<div className="tchip">
					<div className="tchip-head">
						<div className="avatar">
							<img src="https://api.adorable.io/avatars/60/arnaud@adorable.io.png" alt=""/>
							<div className="name">
								<h3>Arnaud</h3>
								<span className="username">@arnaudprat</span>
							</div>
						</div>
						
						<div className="tchip-date">{details.date}</div>
					</div>
					<div className="tchip-content">
						<p>{details.tchip}</p>
					</div>
					<div className="tchip-action">
						<button className="like" onClick={(e) => this.incrementLikes(e)}>
							<div className="icon"><i className="fa fa-heart"></i></div>
							<div className="like-count"> {this.state.likes}</div>
						</button>
						<button className="retchip">
							<div className="icon"><i className="fa fa-reply"></i></div>
							<div className="retchip-count"> 0</div>
						</button>
					</div>
				</div>
			);
	}
}

export default Tchip;