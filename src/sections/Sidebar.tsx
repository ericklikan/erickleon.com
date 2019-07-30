import * as React from 'react'
import styled from 'styled-components'
import { AppState } from 'App/AppState'
import { observer } from 'mobx-react'
import { DIMENSIONS, ANIMATION, COLORS } from 'App/AppConstants'

// TODO: add color constants
const SidebarNav = styled.div`
	height: 100%;
	width: ${DIMENSIONS.SIDEBAR_WIDTH_CLOSE};
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background-color: ${COLORS.SIDEBAR_BACKGROUND_COLOR};
	overflow-x: hidden;
	transition: width ${ANIMATION.SIDEBAR};
	&:hover {
		width: ${DIMENSIONS.SIDEBAR_WIDTH_OPEN};
	}
`

@observer
class Sidebar extends React.Component<{ appState: AppState }> {
	public render() {
		return <SidebarNav />
	}
}

export default Sidebar
