import * as React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import { AppState } from 'App/AppState'
import { DIMENSIONS, ANIMATION } from 'App/AppConstants'

import Introduction from 'sections/Introduction'
import About from 'sections/About'
import Experience from 'sections/Experience'
import Projects from 'sections/Projects'

const Page = styled.div`
	height: 100%;
	transition: margin-left ${ANIMATION.SIDEBAR};
	margin-left: ${DIMENSIONS.SIDEBAR_WIDTH_CLOSE};
	display: flex;
	justify-content: center;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		margin-left: 0;
	}
`
const Centered = styled.div`
	margin-left: 20px;
	margin-right: 20px;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_L}) {
		width: 100%;
	}
	@media only screen and (min-width: ${DIMENSIONS.BREAK_XL}) {
		width: ${DIMENSIONS.BREAK_XL};
	}
`

interface IProperties {
	appState: AppState
}

@observer
export default class MainPage extends React.Component<IProperties> {
	constructor(props: IProperties) {
		super(props)
		this.toggleSidebar = this.toggleSidebar.bind(this)
	}

	private toggleSidebar() {
		this.props.appState.sidebarIsOpen
			? this.props.appState.closeSidebar()
			: this.props.appState.openSidebar()
	}

	public render() {
		return (
			<Page>
				<Centered>
					<Introduction />
					<About />
					<Experience />
					<Projects />
				</Centered>
			</Page>
		)
	}
}
