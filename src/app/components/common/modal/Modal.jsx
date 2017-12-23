import React from 'react';

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.close = this.close.bind(this);		
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	componentDidMount() {
		window.addEventListener("keydown", this.handleKeyDown);
	}
	componentWillUnmount() {
		window.removeEventListener("keydown", this.handleKeyDown);
	}
	close(e) {
		if (e) {
			this._stopPropagation(e);
		}

		this.props.onClose();
	}
	handleKeyDown(e) {
		if (this.props.display) {
			if (e.which === 27) {
				this.close(false);
			}
		}
	}
	_stopPropagation(e) {
		e.stopPropagation();
	}
	render() {
		if (this.props.display) {
			return (
				<div className='modal-bg' onMouseUp={this.close}>
					<div className={'modal ' + (this.props.customClass)} onMouseUp={this._stopPropagation}>
						<div className='modal-content'>
							{this.props.children}
						</div>
						<button type='button' className='btn-transparent modal-close' onMouseUp={this.close}>
							&times;
						</button>
					</div>
				</div>
			)
		} 
		return null;
	}
}

export default Modal;