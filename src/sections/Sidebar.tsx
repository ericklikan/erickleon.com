import * as React from 'react'
import styled from 'styled-components'
import { AppState } from 'App/AppState'
import { observer } from 'mobx-react'
import { DIMENSIONS, ANIMATION, COLORS } from 'App/AppConstants'

// TODO: add color constants
const SidebarNav = styled.div`
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: ${COLORS.SIDEBAR_BACKGROUND_COLOR};
	overflow-x: hidden;
	transition: width ${ANIMATION.SIDEBAR};
`

@observer
class Sidebar extends React.Component<{ appState: AppState }> {
	public render() {
		return (
			<SidebarNav
				style={{
					width: this.props.appState.sidebarIsOpen
						? DIMENSIONS.SIDEBAR_WIDTH_OPEN
						: DIMENSIONS.SIDEBAR_WIDTH_CLOSE,
				}}
			/>
		)
	}
}

export default Sidebar
