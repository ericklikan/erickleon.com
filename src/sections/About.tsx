import * as React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import { TextContent, EndSpace } from 'components/Styled'
import about from 'static/about.jpg'
import { DIMENSIONS } from 'App/AppConstants'

const AboutImage = styled.img`
	width: 200px;
	height: auto;
	border-radius: 30px;
	transition: 0.5s;
	box-shadow: 5px 5px 10px grey;
`
const TextContainer = styled.div`
	margin-right: 30px;
	flex: auto;
`
const ImageContainer = styled.div`
	float: right;
	width: 100%;
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
							I’m currently in third year studying Computer Engineering at Waterloo.
						</TextContent>
						<TextContent>
							I've been a builder since I was a kid. Beginning with Lego creations to
							building PCs, and then moving onto electronic projects. I just love that
							feeling of turning ideas a reality and it’s what led me to becoming a
							developer.
						</TextContent>
						<TextContent>
							In my spare time you can find me drinking some coffees, at the gym, or
							going on hikes.
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
