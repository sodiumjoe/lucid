import React from 'react';
import ButtonGroup from '../ButtonGroup';

export default React.createClass({
	render() {
		return (
			<ButtonGroup selectedIndices={[7, 8]}>
				<ButtonGroup.Button>Zero</ButtonGroup.Button>
				<ButtonGroup.Button>One</ButtonGroup.Button>
				<ButtonGroup.Button>Two</ButtonGroup.Button>
				<ButtonGroup.Button>Three</ButtonGroup.Button>
				<ButtonGroup.Button>Four</ButtonGroup.Button>
				<ButtonGroup.Button isDisabled={true}>Five</ButtonGroup.Button>
				<ButtonGroup.Button>Six</ButtonGroup.Button>
				<ButtonGroup.Button>Seven</ButtonGroup.Button>
				<ButtonGroup.Button>Eight</ButtonGroup.Button>
				<ButtonGroup.Button>Nine</ButtonGroup.Button>
			</ButtonGroup>
		);
	}
});
