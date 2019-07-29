import * as React from 'react'
import styled from 'styled-components'
import Section from 'components/Section'
import { TextContent } from 'components/Styled'
import about from 'static/about.jpg'

const AboutImage = styled.img`
	width: 150pt;
	height: auto;
	border-radius: 20pt;
	transition: 0.5s;
	box-shadow: 2pt 2pt 5pt grey;
`
const TextContainer = styled.div`
	padding-right: 20pt;
	flex: auto;
`
const ImageContainer = styled.div`
	float: right;
	width: 150pt;
	display: flex;
	justify-content: center;
	align-items: center;
	${AboutImage}:hover {
		box-shadow: 5pt 5pt 10pt grey;
		transform: translate(-1pt, -1pt);
	}
`
const FlexContainer = styled.div`
	display: flex;
	padding: 0 0 0 20pt;
`

class About extends React.Component<any> {
	public render() {
		return (
			<Section title="About Me">
				<FlexContainer>
					<TextContainer>
						<TextContent>
							<p>
								I’m currently in third year studying Computer Engineering at
								Waterloo.
							</p>
							<p>
								I've been a builder since I was a kid. Beginning with Lego creations
								to building PCs, and then moving onto electronic projects. I just
								love that feeling of turning ideas a reality and it’s what led me to
								becoming a developer.
							</p>
							<p>
								In my spare time you can find me drinking some coffees, at the gym,
								or going on hikes.
							</p>
						</TextContent>
					</TextContainer>
					<ImageContainer>
						<AboutImage src={about} />
					</ImageContainer>
				</FlexContainer>
			</Section>
		)
	}
}

export default About
