import React from 'react';

class Modal extends React.Component {
	constructor(props) {
		super(props);

		this.close = this.close.bind(this);
	}
	close(e) {
		this._stopPropagation(e);

		this.props.onClose();
	}
	_stopPropagation(e) {
		e.stopPropagation();
	}
	render() {
		if (this.props.display) {
			return (
				<div className='modal-bg' onMouseUp={this.close}>
					<div className={'modal ' + (this.props.customClass)} onMouseUp={this._stopPropagation}>
						{this.props.children}

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