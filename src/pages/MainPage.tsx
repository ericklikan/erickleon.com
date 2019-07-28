import * as React from 'react'
import { AppState } from 'App/AppState'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { DIMENSIONS, ANIMATION } from 'App/AppConstants'

import Introduction from 'sections/Introduction'
import About from 'sections/About'
import Experience from 'sections/Experience'
import Projects from 'sections/Projects'

const Page = styled.div`
	height: 100%;
	transition: margin-left ${ANIMATION.SIDEBAR};
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
			<Page
				style={{
					marginLeft: this.props.appState.sidebarIsOpen
						? DIMENSIONS.SIDEBAR_WIDTH_OPEN
						: DIMENSIONS.SIDEBAR_WIDTH_CLOSE,
				}}>
				<button onClick={this.toggleSidebar}>Open</button>
				<Introduction />
				<About />
				<Experience />
				<Projects />
			</Page>
		)
	}
}
