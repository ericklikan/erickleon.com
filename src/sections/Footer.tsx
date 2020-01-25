import * as React from 'react'
import styled from 'styled-components'
import { COLORS } from 'App/AppConstants'

const FooterDiv = styled.div`
	width: 100%;
	background-color: ${COLORS.SIDEBAR_BACKGROUND_COLOR};

	text-align: center;
`
const TextContainer = styled.div`
	padding: 40px;
`
const Text = styled.p`
	margin: 0;
	color: white;
	font-family: Courier, monospace;
`
const EmailLink = styled.a`
	color: inherit;
`

class Footer extends React.Component {
	public render() {
		return (
			<FooterDiv>
				<TextContainer>
					<Text>
						Have any more questions for me?
						<br />
						Email me at{' '}
						<EmailLink href="mailto:eeleon@uwaterloo.ca">eeleon@uwaterloo.ca</EmailLink>
					</Text>
				</TextContainer>
			</FooterDiv>
		)
	}
}

export default Footer
