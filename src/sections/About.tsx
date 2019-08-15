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
const RefContainer = styled.div`
	padding-top: 50px;
`

interface IProps {
	aboutRef: React.Ref<HTMLDivElement>
}

class About extends React.Component<IProps> {
	public render() {
		return (
			<RefContainer ref={this.props.aboutRef}>
				<Section title="About Me">
					<FlexContainer>
						<TextContainer>
							<TextContent>
								I’m currently a third year <b>Computer Engineering</b> student at
								the <b>University of Waterloo</b> looking to pursue a career as a{' '}
								<b>Software Developer</b>.
							</TextContent>
							<TextContent>
								So far, I've had three amazing work terms learning something
								different each time. I'm always working to grow and become a better
								developer
							</TextContent>
							<TextContent>
								In my spare time you can find me drinking <b>coffee</b> (count the
								cups I'm holding{' '}
								<span role="img" aria-label="coffee">
									☕
								</span>
								), at the gym, or working on super cool projects.
							</TextContent>
						</TextContainer>
						<ImageContainer>
							<AboutImage src={about} />
						</ImageContainer>
					</FlexContainer>
					<EndSpace />
				</Section>
			</RefContainer>
		)
	}
}

export default About
