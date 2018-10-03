import React from 'react';
import PropTypes from 'prop-types';

import $ from 'jquery';

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
		$('body').removeClass('modal-open');
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.display !== this.props.display) {
			if (nextProps.display) {
				$('body').addClass('modal-open');
			} else {
				$('body').removeClass('modal-open');
			}
		}
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
					<div className={'modal ' + (this.props.customClass || '')} onMouseUp={this._stopPropagation}>
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

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	display: PropTypes.bool,
	customClass: PropTypes.string
}

export default Modal;