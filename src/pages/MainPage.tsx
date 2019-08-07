import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS, ANIMATION } from 'App/AppConstants'

import Introduction from 'sections/Introduction'
import About from 'sections/About'
import Experience from 'sections/Experience'
import Projects from 'sections/Projects'
import End from 'sections/End'
import Footer from 'sections/Footer'

const Page = styled.div`
	height: 100%;
	transition: margin-left ${ANIMATION.SIDEBAR};
	margin-left: 0;
	display: flex;
	justify-content: center;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		margin-left: 0;
	}
`
const Centered = styled.div`
	margin-right: 20px;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_L}) {
		width: 100%;
	}
	@media only screen and (min-width: ${DIMENSIONS.BREAK_L}) {
		width: ${DIMENSIONS.BREAK_L};
		margin-left: 20px;
	}
`

export default class MainPage extends React.Component {
	public render() {
		return (
			<Page>
				<Centered>
					<Introduction />
					<About />
					<Experience />
					<Projects />
					<End />
					<Footer />
				</Centered>
			</Page>
		)
	}
}
