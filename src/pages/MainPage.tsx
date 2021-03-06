import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS } from 'App/AppConstants'

import Introduction from 'sections/Introduction'
import About from 'sections/About'
import Experience from 'sections/Experience'
import Projects from 'sections/Projects'
import End from 'sections/End'
import Footer from 'sections/Footer'

const Page = styled.div`
	height: 100%;
`
const Centered = styled.div`
	margin: auto;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_L}) {
		width: 95%;
		margin-right: 20px;
	}
	width: ${DIMENSIONS.BREAK_L};
`

export default class MainPage extends React.Component {
	private aboutRef = React.createRef<HTMLDivElement>()
	public render() {
		return (
			<Page>
				<Centered>
					<Introduction aboutRef={this.aboutRef} />
					<About aboutRef={this.aboutRef} />
					<Experience />
					<Projects />
					<End />
				</Centered>
				<Footer />
			</Page>
		)
	}
}
