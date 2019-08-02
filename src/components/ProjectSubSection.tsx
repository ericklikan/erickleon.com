import * as React from 'react'
import styled from 'styled-components'
import { DIMENSIONS } from 'App/AppConstants'
import Point from './Point'
import Line from './Line'
import { Subtitle, TextContent } from './Styled'

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row-reverse;
`
const SeparatorContainer = styled.div`
	display: flex;
	justify-items: center;
	flex-direction: column;
`
const PointContainer = styled.div`
	min-width: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	min-height: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	justify-content: center;
	align-items: center;
`
const LineContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	@media only screen and (max-width: ${DIMENSIONS.BREAK_M}) {
		display: none;
	}
`
const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`
const TitleContainer = styled.div`
	width: 100%;
	height: ${DIMENSIONS.SECTION_SIDE_LENGTH};
	display: flex;
	align-items: center;
	justify-content: center;
`
const TextContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-items: center;
`
const Text = styled.div`
	margin: 50px 50px 50px 50px;
	width: 100%;
`
const ImageContainer = styled.div`
	margin: 50px 75px 50px 75px;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Image = styled.img`
	width: 100%;
	height: auto;
	background-color: blue;
	border-radius: 30px;
	transition: 0.5s;
	box-shadow: 5px 5px 10px grey;
`

interface IProperties {
	title: string
	image: string
}

class ProjectSubSection extends React.Component<IProperties> {
	public render() {
		return (
			<Container>
				<ContentContainer>
					<TitleContainer>
						<Subtitle>{this.props.title}</Subtitle>
					</TitleContainer>
					<TextContainer>
						<Text>{this.props.children}</Text>
					</TextContainer>
				</ContentContainer>
				<SeparatorContainer>
					<PointContainer>
						<Point hover={false} />
					</PointContainer>
					<LineContainer>
						<Line />
					</LineContainer>
				</SeparatorContainer>
				<ContentContainer>
					<TitleContainer />
					<ImageContainer>
						<Image src={this.props.image} alt={`${this.props.title} picture`} />
					</ImageContainer>
				</ContentContainer>
			</Container>
		)
	}
}

export default ProjectSubSection
