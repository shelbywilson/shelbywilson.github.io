import React from 'react';

class PatternBuilderControls extends React.Component {
	constructor(props) {
		super(props);

		this.modifyGrid = this.props.onModifyGrid.bind(this);
		this.reset = this.props.onReset.bind(this);
	}
	render() {
		return (
			<div className='pattern-builder-controls'>
				<div className='pattern-builder-controls-item'>
					<h4>
						threading
					</h4>
					<div className='pattern-builder-controls-item-section'>	
						<h5>
							height	
						</h5>
						<button type='button' className='btn-small' onMouseUp={this.modifyGrid.bind(this, {isAddRow: true, isThreading: true} )}>&#43;</button>	
						<button type='button' className='btn-small' onMouseUp={this.modifyGrid.bind(this, {isRemoveRow: true, isThreading: true} )}>&minus;</button>
					</div>
					<div className='pattern-builder-controls-item-section'>	
						<h5>
							width	
						</h5>		
						<button type='button' className='btn-small' onMouseUp={this.modifyGrid.bind(this, {isAddCol: true, isThreading: true } )}>&#43;</button>	
						<button type='button' className='btn-small' onMouseUp={this.modifyGrid.bind(this, {isRemoveCol: true, isThreading: true } )}>&minus;</button>
					</div>
				</div>
				<div className='pattern-builder-controls-item'>
					<h4>
						treading order
					</h4>
					<div className='pattern-builder-controls-item-section'>
						<h5>
							height	
						</h5>
						<button type='button' className='btn-small' onMouseUp={this.modifyGrid.bind(this, {isAddRow: true, isTreadling: true} )}>&#43;</button>	
						<button type='button' className='btn-small' onMouseUp={this.modifyGrid.bind(this, {isRemoveRow: true, isTreadling: true} )}>&minus;</button>
					</div>
					<div className='pattern-builder-controls-item-section'>	
						<h5>
							width	
						</h5>	
						<button type='button' className='btn-small' onMouseUp={this.modifyGrid.bind(this, {isAddCol: true, isTreadling: true } )}>&#43;</button>	
						<button type='button' className='btn-small' onMouseUp={this.modifyGrid.bind(this, {isRemoveCol: true, isTreadling: true } )}>&minus;</button>
					</div>
				</div>
				<div>
					<button type='button' className='btn-primary' onMouseUp={this.reset}>
						Reset
						&nbsp;
						<span className='symbol-refresh'>&#x21bb;</span>
					</button>
				</div>
			</div>
		)
	}
}

export default PatternBuilderControls;