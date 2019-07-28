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
	padding: 0 30pt 0 20pt;
`

class About extends React.Component<any> {
	public render() {
		return (
			<Section title="About Me">
				<FlexContainer>
					<TextContainer>
						<TextContent>
							I’m currently a third year Computer Engineering student at Waterloo.
							From a young age I’ve been a builder. Beginning with building Legos to
							building PCs, and then moving onto electronic projects. I just love that
							feeling of turning ideas a reality and it’s what led me to becoming a
							developer.
							<br /> <br />
							In my spare time you can find me drinking some coffees, at the gym, or
							going on hikes.
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
