import * as React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import { TextContent, EndSpace } from 'components/Styled'
import about from 'static/about.jpg'
import { DIMENSIONS } from 'App/AppConstants'

const AboutImage = styled.img`
	width: 200px;
	height: auto;
	border-radius: ${DIMENSIONS.IMAGE_BORDER_RADIUS};
`
const TextContainer = styled.div`
	margin-right: 30px;
`
const ImageContainer = styled.div`
	float: right;
	display: flex;
	justify-content: center;
	align-items: center;
`
const FlexContainer = styled.div`
	display: flex;
	margin-left: 20px;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		flex-direction: column;
		margin-bottom: 40px;
		margin-left: 0px;
	}
`

class About extends React.Component<any> {
	public render() {
		return (
			<Section title="About Me">
				<FlexContainer>
					<TextContainer>
						<TextContent>
							I’m currently a third year Computer Engineering student at Waterloo and
							pursuing a career as a software developer.
						</TextContent>
						<TextContent>
							So far, I've had three amazing work terms learning something a little
							bit different each time, but each time I take one step in becoming a
							better developer.
						</TextContent>
						<TextContent>
							In my spare time you can find me drinking coffee (count the cups I'm
							holding{' '}
							<span role="img" aria-label="coffee">
								☕
							</span>
							), at the gym, going on hikes, and working on super cool projects.
						</TextContent>
					</TextContainer>
					<ImageContainer>
						<AboutImage src={about} />
					</ImageContainer>
				</FlexContainer>
				<EndSpace />
			</Section>
		)
	}
}

export default About
